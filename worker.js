import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from './assets/db.json.zip';
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce'

let fuse

async function main() {
  console.time('download');
  const res = await fetch(dbUrl);
  const blob = await res.blob();
  console.timeEnd('download');

  const reader = new ZipReader(new BlobReader(blob))
  const entries = await reader.getEntries();

  for (const entry of entries) {
    console.time('decompress')

    const json = await entry.getData(new TextWriter(), {
      onprogress: (progress, total) => {
        console.log(`decompress: ${Math.round((progress / total) * 10000) / 100}%`)
      }
    })

    console.timeEnd('decompress')
    console.time('parse')
    const items = JSON.parse(json);
    console.timeEnd('parse');
    console.log(items.length);

    fuse = new Fuse(items, {
      keys: [
        "main",
        "definition",
        "example"
      ]
    })

    postMessage("READY")
  }
}


await main()

let current;

addEventListener('message', (msg) => {
  if (!fuse) return

  if (typeof current === 'number') {
    clearTimeout(current)
    console.log('clear', current)
  }

  current = setTimeout(() => {
    const t = performance.now();
    const data = fuse.search(msg.data, { limit: 20 });
    postMessage({
      time: performance.now() - t,
      data,
    });
  })


})
