import './main.css'
import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from './assets/db.json.zip';
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce'

const searchElement = document.querySelector('#search');
const resultElement = document.querySelector('#result');

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
})


worker.addEventListener('message', (msg) => {
  if (msg.data === "READY") {
    console.log('ready')
    searchElement.disabled = false;
    return
  }

  const { data, time } = msg.data;
  const millis = Math.round((time * 100) / 1000) / 100;


  if (data.length === 0) {
    resultElement.innerHTML = 'Empty'
    return;
  }

  resultElement.innerHTML = `<p>${millis} វិនាទី, រកឃើញ ${data.length} ពាក្យ</p>` + data.map(({ item }) => {
    return `<li><strong class="word">${item.subword || item.main || ""}<span class="pos">${item.part_of_speech || "មិនមាន"}</span></strong><p>${item.definition}</p> <p class="example">${item.example || ""}</p></li>`;
  }).join('')
})

searchElement.addEventListener('input', debounce(() => {
  const text = searchElement.value;
  worker.postMessage(text);
}, 100))

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

    const fuse = new Fuse(items, {
      keys: [
        "main",
        "definition",
        "example"
      ]
    })
  }
}
