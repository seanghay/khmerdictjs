import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from './assets/db.json.zip'

console.time('download')
const res = await fetch(dbUrl);
const blob = await res.blob();
console.timeEnd('download')

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
  window.__items = items;
}