import { toKhmer } from 'khmernumber';
import './main.css';
import debounce from 'lodash.debounce';
import ProgressBar from 'progressbar.js';

/**
 * @param {string} text 
 */
window.synthesize = async function (e, text) {
  text = text.replace(/[^\u1780-\u17d2]+/, '')
  if (!text) return;
  let el = e.target;
  while (!(el instanceof HTMLButtonElement)) {
    el = el.parentElement;
  }
  el.disabled = true;
  try {
    const context = window.audioContext;
    const audioUrl = new URL("https://klea-js.fly.dev/" + text)
    const response = await fetch(audioUrl);
    const buffer = await response.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(buffer);
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);

    if (source.start) {
      source.start(0);
    } else if (source.play) {
      source.play(0);
    } else if (source.noteOn) {
      source.noteOn(0);
    }

  } catch (e) {
    console.error(e);
  } finally {
    el.disabled = false;
  }
}

const sampleListElement = document.querySelector('#sample-list');
const searchElement = document.querySelector('#search');
const resultElement = document.querySelector('#result');
const progressContainerElement = document.querySelector('#progress-container');

const IS_SEGMENTER_AVAILABLE = 'Intl' in self && 'Segmenter' in Intl

function sanitizeDef(def) {
  if (typeof def === 'string') {
    return def.replace(/:$/, '')
  }
  return def;
}

const line = new ProgressBar.Line(progressContainerElement, {
  color: 'rgba(255,255,255,.3)',
  strokeWidth: 1,
  trailWidth: 1,
  trailColor: "rgba(255,255,255, .1)",
  easing: 'easeInOut',
  svgStyle: {
    borderRadius: "2rem"
  }
})

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
})

window.downloadImage = id => {
  worker.postMessage(`render:${id}`)
}

worker.addEventListener('message', (msg) => {

  if (msg.data && typeof msg.data.name === 'string' && msg.data.name === 'file_download') {
    const el = document.createElement("a")
    el.href = msg.data.url;
    el.download = msg.data.filename;
    el.click();
    URL.revokeObjectURL(msg.data.url);
    return;

  }

  const handleSamples = samples => {
    sampleListElement.innerHTML = '';

    for (const sample of samples) {
      const button = document.createElement('button');
      button.textContent = sample;
      button.classList.add('button-word-suggest')
      button.addEventListener('click', () => {
        searchElement.value = sample;
        triggerSearch(sample)
        updateQuery(sample)
      })

      sampleListElement.appendChild(button)
    }
  }

  if (typeof msg.data === 'object' && msg.data.sampleItems) {
    handleSamples(msg.data.sampleItems)
    return;
  }

  if (typeof msg.data === 'object' && msg.data.progress) {
    line.animate(msg.data.progress / 100)
    return;
  }

  if (msg.data === "READY") {
    console.log('ready')
    sampleListElement.style.display = 'flex'
    progressContainerElement.style.display = 'none';
    searchElement.disabled = false;
    searchElement.style.display = 'block';

    if (searchElement.value) {
      triggerSearch(searchElement.value)
    }
    return
  }

  const { data, time, suggests } = msg.data;
  const millis = toKhmer(`${Math.round(time)}`)
  if (suggests && suggests.length) {
    handleSamples(suggests)
  }

  if (data.length === 0) {
    resultElement.innerHTML = '<p class="empty">រកមិនឃើញ</p>'
    sampleListElement.style.display = 'flex'
    return;
  }

  sampleListElement.style.display = 'flex'
  const createPOS = (item) => {
    if (!item.part_of_speech) {
      return ''
    }
    return `<span class="pos">${item.part_of_speech || ""}</span>`
  }

  resultElement.innerHTML = `<p class="stats">ចំណាយពេល ${millis} មិល្លីវិនាទី រកឃើញ ${toKhmer(data.length + "")} ពាក្យ</p>` + data.map((item) => {
    const el = item.example ? `<p class="example">${item.example || ""}</p>` : ""
    const noteEl = item.notes ? `<p class="pronunciation">ចំណាំ៖ <span class="white">${item.notes}</span></p>` : '';

    const downloadElement = IS_SEGMENTER_AVAILABLE ?
      `<button onclick='downloadImage(${item.id})' style="margin-right: 8px" class="clipboard-copy">ទាញយករូប</button>` :
      ''

    return `
      <li>
        <div class="card-header">
          <strong class="word">${item.subword || item.main || ""}${createPOS(item)}</strong>
          ${downloadElement}
          <button onclick='copyToClipboard(${JSON.stringify(item.subword || item.main || "")})' class="clipboard-copy">ចម្លងពាក្យ</button>
        </div> 

        <p>${sanitizeDef(item.definition)}</p>
        ${el}
        ${noteEl}
        <div class="flex items-center gap">        
          <p class="pronunciation">អានថា៖ <span class="white">${item.pronunciation}</span></p>
          <button onclick='synthesize(event, ${JSON.stringify(item.subword || item.main || "")})' class="button flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975q0 3.175-1.95 5.613T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95q1.175.55 1.838 1.65T16.5 12q0 1.275-.663 2.363T14 16"/></svg>
            <span>ស្ដាប់</span>
          </button>
        </div>
      </li>



    `;
  }).join('')


});

searchElement.value = getQuery()
searchElement.addEventListener('input', debounce(() => {
  const text = searchElement.value;
  triggerSearch(text)
  updateQuery(text)
}, 10));

function triggerSearch(v) {
  worker.postMessage(v);
}

function updateQuery(q) {
  const url = new URL(window.location);
  url.pathname = q;
  window.history.replaceState(null, '', url.toString());
}

function getQuery() {
  const url = new URL(window.location);
  if (!url.pathname || url.pathname === "/") return "";
  return decodeURIComponent(url.pathname.slice(1))
}
