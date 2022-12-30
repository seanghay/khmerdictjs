import './main.css'
import debounce from 'lodash.debounce'
import ProgressBar from 'progressbar.js'
import { toKhmer } from 'khmernumber';

const sampleListElement = document.querySelector('#sample-list');
const searchElement = document.querySelector('#search');
const resultElement = document.querySelector('#result');
const progressContainerElement = document.querySelector('#progress-container');

const line = new ProgressBar.Line(progressContainerElement, {
  color: 'rgba(255,255,255,.6)',
  strokeWidth: 1,
})

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
})

worker.addEventListener('message', (msg) => {

  if (typeof msg.data === 'object' && msg.data.sampleItems) {
    const samples = msg.data.sampleItems;
    sampleListElement.innerHTML = '';
    for (const sample of samples) {
      if (!sample.main) {
        continue;
      }

      const button = document.createElement('button');
      button.textContent = sample.main;

      button.classList.add('button-word-suggest')
      button.addEventListener('click', () => {
        searchElement.value = sample.main;
        triggerSearch(sample.main)
      })
      sampleListElement.appendChild(button)
    }
    return;
  }

  if (typeof msg.data === 'object' && msg.data.progress) {
    //progressElement.value = msg.data.progress;
    line.animate(msg.data.progress / 100)
    return;
  }

  if (msg.data === "READY") {
    console.log('ready')
    sampleListElement.style.display = 'flex'
    progressContainerElement.style.display = 'none';
    searchElement.disabled = false;
    return
  }

  const { data, time } = msg.data;
  const millis = Math.round((time * 10000) / 1000) / 10000;

  if (data.length === 0) {
    resultElement.innerHTML = '<p class="empty">រកមិនឃើញ</p>'
    sampleListElement.style.display = 'flex'
    return;
  }

  sampleListElement.style.display = 'none'
  const createPOS = (item) => {
    if (!item.part_of_speech) {
      return ''
    }

    return `<span class="pos">${item.part_of_speech || ""}</span>`
  }

  resultElement.innerHTML = `<p>${millis} វិនាទី, រកឃើញ ${data.length} ពាក្យ</p>` + data.map((item) => {
    return `<li><strong class="word">${item.subword || item.main || ""}${createPOS(item)}</strong><p>${item.definition}</p> <p class="example">${item.example || ""}</p></li>`;
  }).join('')

})

searchElement.addEventListener('input', debounce(() => {
  const text = searchElement.value;
  triggerSearch(text)
}, 10))



function triggerSearch(v) {
  worker.postMessage(v);
}