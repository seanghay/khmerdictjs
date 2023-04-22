import { toKhmer } from 'khmernumber';
import './main.css'
import debounce from 'lodash.debounce'
import ProgressBar from 'progressbar.js'

const sampleListElement = document.querySelector('#sample-list');
const searchElement = document.querySelector('#search');
const resultElement = document.querySelector('#result');
const progressContainerElement = document.querySelector('#progress-container');

function sanitizeDef(def) {
  if (typeof def === 'string') {
    return def.replace(/:$/, '')
  }
  return def;
}

const line = new ProgressBar.Line(progressContainerElement, {
  color: 'rgba(255,255,255,.6)',
  strokeWidth: 2,
  trailWidth: 2,
  trailColor: "rgba(255,255,255, .1)",
  easing: 'easeInOut',
})

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
})

worker.addEventListener('message', (msg) => {

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
    const noteEl = item.notes ? `<p class="pronunciation">ចំណាំ៖ <span class="white">${item.notes}</span></p>` : ''
    return `
      <li>
        <strong class="word">${item.subword || item.main || ""}${createPOS(item)}</strong>
        <p>${sanitizeDef(item.definition)}</p>
        ${el}
        ${noteEl}
        <p class="pronunciation">អានថា៖ <span class="white">${item.pronunciation}</span></p>
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