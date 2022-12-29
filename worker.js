import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from './assets/db.json.zip';
// const dbUrl = 'https://cdn.jsdelivr.net/gh/seanghay/khmerdictjs@main/assets/db.json.zip';

import MiniSearch from 'minisearch'

let _minisearch;
let _words = [];

async function downloadFileBlob(url, progress = () => { }) {
  const response = await fetch(url);
  const contentLength = response.headers.get('content-length');
  const total = parseInt(contentLength, 10);
  let loaded = 0;

  const res = new Response(new ReadableStream({
    async start(controller) {
      const reader = response.body.getReader();
      for (; ;) {
        const { done, value } = await reader.read();
        if (done) break;
        loaded += value.byteLength;
        progress(loaded / total);
        controller.enqueue(value);
      }
      controller.close();
    },
  }));

  return res.blob();
}

async function main() {
  let percent1 = 0;
  let percent2 = 0;
  let percent3 = 0;

  const totalProgress = () => {
    postMessage({ progress: percent1 + percent2 + percent3 });
  }

  console.time('download');
  const blob = await downloadFileBlob(dbUrl, progress => {
    percent1 = (progress * 100 / 3);
    totalProgress()
  });

  console.timeEnd('download');

  const reader = new ZipReader(new BlobReader(blob))
  const entries = await reader.getEntries();

  for (const entry of entries) {
    console.time('decompress')
    const json = await entry.getData(new TextWriter(), {
      onprogress: (loaded, total) => {
        const progress = loaded / total;
        percent2 = (progress * 100 / 3);
        totalProgress()
      }
    })
    console.timeEnd('decompress')
    console.time('parse')
    const items = JSON.parse(json).map((item, id) => ({ ...item, id }));
    _words = items;

    console.timeEnd('parse');
    console.log(items.length);

    console.time('index')
    
    percent3 += 33.33 / 2;
    totalProgress()

    const minisearch = new MiniSearch({
      fields: ['main', 'subword', 'definition', 'example'],
      searchOptions: {
        boost: { main: 2, subword: 2 },
        fuzzy: .3
      }
    })

    minisearch.addAll(items);
    console.timeEnd('index')
    _minisearch = minisearch;
  
    postMessage("READY")
    percent3 += 33.33 / 2;
    totalProgress()
  
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
