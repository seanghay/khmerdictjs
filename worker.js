import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import dbUrl from "./assets/db2.json.zip";
import MiniSearch from "minisearch";
import { createPictureCard } from "./picture.js";
import localforage from "localforage";

let appIcon = null;
let _minisearch;
let _words = [];
let _wordsMap = new Map();

async function downloadFileBlob(url, progress = () => {}) {
	const response = await fetch(url);
	const contentLength = response.headers.get("content-length");
	const total = parseInt(contentLength, 10);
	let loaded = 0;

	const res = new Response(
		new ReadableStream({
			async start(controller) {
				const reader = response.body.getReader();
				for (;;) {
					const { done, value } = await reader.read();
					if (done) break;
					loaded += value.byteLength;
					progress(loaded / total);
					controller.enqueue(value);
				}
				controller.close();
			},
		}),
	);

	return res.blob();
}

async function main() {
	// cfg
	const indexOptions = {
		fields: ["main", "subword", "definition", "example", "pronunciation", "r"],
		searchOptions: {
			boost: { main: 2, subword: 2, r: 1.5 },
			fuzzy: 0.3,
		},
	};

	// handle cache hits

	const cachedApp = await localforage.getItem("app");
	if (cachedApp != null) {
		postMessage("READY");
		console.time("index");
		console.log("cache hits");

		_words = cachedApp.words;
		_wordsMap = new Map(cachedApp.wordsEntries);

		postMessage({
			sampleItems: createSampleItems(_words),
		});

		// create minisearch instance;
		_minisearch = MiniSearch.loadJS(cachedApp.index, indexOptions);
		console.timeEnd("index");

		return;
	}

	let percent1 = 0;
	let percent2 = 0;
	let percent3 = 0;

	const totalProgress = () => {
		postMessage({
			progress: percent1 + percent2 + percent3,
		});
	};

	console.time("download");
	const blob = await downloadFileBlob(dbUrl, (progress) => {
		percent1 = (progress * 100) / 3;
		totalProgress();
	});

	console.timeEnd("download");

	const reader = new ZipReader(new BlobReader(blob));
	const entries = await reader.getEntries();

	for (const entry of entries) {
		console.time("decompress");
		const json = await entry.getData(new TextWriter(), {
			onprogress: (loaded, total) => {
				const progress = loaded / total;
				percent2 = (progress * 100) / 3;
				totalProgress();
			},
		});

		console.timeEnd("decompress");
		console.time("parse");
		const items = JSON.parse(json).map((item, id) => ({ ...item, id }));

		_words = items;
		_wordsMap = new Map(items.map((item) => [item.id, item]));

		postMessage({
			sampleItems: createSampleItems(items),
		});

		console.timeEnd("parse");
		console.log(items.length);

		console.time("index");

		percent3 += 33.33 / 2;
		totalProgress();

		const minisearch = new MiniSearch(indexOptions);
		minisearch.addAll(items);

		await localforage.setItem("app", {
			index: minisearch.toJSON(),
			words: _words,
			wordsEntries: Array.from(_wordsMap.entries()),
		});

		console.timeEnd("index");
		_minisearch = minisearch;

		postMessage("READY");
		percent3 += 33.33 / 2;
		totalProgress();
	}
}

main();

async function loadImage(url) {
	const res = await fetch(url);
	const blob = await res.blob();
	return createImageBitmap(blob);
}

addEventListener("message", async (msg) => {
	if (typeof msg.data === "string" && msg.data.startsWith("render:")) {
		const id = +msg.data.split(":")[1];

		if (!_wordsMap.has(id)) return;

		if (appIcon == null) {
			appIcon = await loadImage("/apple-icon.png");
		}

		const item = _wordsMap.get(id);
		const word = item.subword || item.main;
		const def = item.definition;
		const canvas = createPictureCard(appIcon, {
			pronunciation: `អានថា៖ ${item.pronunciation}`,
			pos: item.part_of_speech,
			definition: item.example ? def + "\n" + item.example : def,
			word,
			url: `khmerdict.com/${word}`,
		});

		canvas.convertToBlob({ type: "image/png" }).then((blob) => {
			self.postMessage({
				name: "file_download",
				url: URL.createObjectURL(blob),
				filename: `${word}-khmerdict.png`,
			});
		});
		return;
	}

	if (!_minisearch) return;
	if (!msg.data && _words && _words.length > 0) {
		postMessage({
			sampleItems: createSampleItems(_words),
		});
	}

	const t = performance.now();
	const suggests = _minisearch
		.autoSuggest(msg.data, {
			boost: { main: 2, subword: 2 },
			fuzzy: 0.3,
			fields: ["main", "subword"],
		})
		.slice(0, 11);

	const results = _minisearch.search(msg.data).slice(0, 100);
	const data = results.map((it) => _words[it.id]);

	postMessage({
		time: performance.now() - t,
		data,
		suggests: [...new Set(suggests.flatMap((i) => i.terms))].slice(1),
	});
});

function randomInteger(min, max) {
	return Math.floor(min + Math.random() * (max - min));
}

function createSampleItems(items = []) {
	const indexes = new Set();

	for (let i = 0; i < 10; i++) {
		const index = randomInteger(0, items.length - 1);
		indexes.add(index);
	}

	return [...indexes].map((i) => items[i].main).filter(Boolean);
}
