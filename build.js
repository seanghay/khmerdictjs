import fs from 'node:fs/promises';
import Knex from 'knex';
import AdmZip from 'adm-zip';

const knex = Knex({
  client: "better-sqlite3",
  connection: {
    filename: "./db.sqlite"
  },
  useNullAsDefault: true,
})

const TABLE_NAME = "main"
const Dictionary = () => knex(TABLE_NAME);
const items = await Dictionary().select('*');
await knex.destroy();

function transformItem(item) {
  const entries = Object.entries(item)
    .filter(([key, value]) => {
      if (typeof value === 'string' && value.trim().length === 0) return false;
      return true
    }).map(([key, value]) => {

      if (key === 'definition' && typeof value === 'string') {
        value = value.replace(/\:$/gm, '').trim();
      }

      return [key, value];
    });

  return Object.fromEntries(entries)
}

function createItemReference(item, collection) {
  if (!item.main && !item.subword) return null;
  return item;
}

const filtered = items.map(transformItem);
const collection = items.map((item) => createItemReference(item, filtered)).filter(it => it != null);
const jsonBuffer = Buffer.from(JSON.stringify(collection), "utf-8");

const zip = new AdmZip();
zip.addFile("db.json", jsonBuffer);
await zip.writeZipPromise("./assets/db.json.zip")

