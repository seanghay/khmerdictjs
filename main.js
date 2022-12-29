import './main.css'
import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from './assets/db.json.zip';
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce'

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

    const searchElement = document.querySelector('#search');
    const resultElement = document.querySelector('#result');

    searchElement.addEventListener('input', debounce(() => {
      const result = fuse.search(searchElement.value, { limit: 100 }).filter(it => it.item.main)
      
      resultElement.innerHTML = result.map(({ item }) => {
        return `<li><strong class="word">${item.subword || item.main}<span class="pos">${item.part_of_speech || "មិនមាន"}</span></strong><p>${item.definition}</p> <p class="example">${item.example || ""}</p></li>`;
      }).join('')

    }, 200))

  }
}

main();