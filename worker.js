import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from './assets/db.json.zip';
import MiniSearch from 'minisearch'

let _minisearch;
let _words = [];

async function main() {
  console.time('download');
  const res = await fetch(dbUrl);
  const blob = await res.blob();
  console.timeEnd('download');

  const reader = new ZipReader(new BlobReader(blob))
  const entries = await reader.getEntries();

  for (const entry of entries) {
    console.time('decompress')
    const json = await entry.getData(new TextWriter())
    console.timeEnd('decompress')
    console.time('parse')
    const items = JSON.parse(json).map((item, id) => ({ ...item, id }));
    _words = items;

    console.timeEnd('parse');
    console.log(items.length);

    console.time('index')
    const minisearch = new MiniSearch({
      fields: ['main', 'definition', 'example'],
      searchOptions: {
        boost: { main: 2 },
        fuzzy: .3
      }
    })

    minisearch.addAll(items);
    console.timeEnd('index')
    _minisearch = minisearch;
    postMessage("READY")
  }
}

main()

addEventListener('message', (msg) => {
  if (!_minisearch) return
  const t = performance.now();
  const results = _minisearch.search(msg.data).slice(0, 100);
  const data = results.map(it => _words[it.id])
  postMessage({
    time: performance.now() - t,
    data,
  });
})
