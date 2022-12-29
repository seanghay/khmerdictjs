import './main.css'
import debounce from 'lodash.debounce'
import ProgressBar from 'progressbar.js'

const searchElement = document.querySelector('#search');
const resultElement = document.querySelector('#result');
const progressContainerElement = document.querySelector('#progress-container');

const line = new ProgressBar.Line(progressContainerElement, {
  color: 'white',
  strokeWidth: 1
})

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
})




worker.addEventListener('message', (msg) => {

  if (typeof msg.data === 'object' && msg.data.progress) {
    //progressElement.value = msg.data.progress;
    line.animate(msg.data.progress / 100)
    return;
  }

  if (msg.data === "READY") {
    console.log('ready')

    progressContainerElement.style.display = 'none';
    searchElement.disabled = false;
    return
  }

  const { data, time } = msg.data;
  const millis = Math.round((time * 10000) / 1000) / 10000;

  if (data.length === 0) {
    resultElement.innerHTML = 'Empty'
    return;
  }

  resultElement.innerHTML = `<p>${millis} វិនាទី, រកឃើញ ${data.length} ពាក្យ</p>` + data.map((item) => {
    return `<li><strong class="word">${item.subword || item.main || ""}<span class="pos">${item.part_of_speech || "មិនមាន"}</span></strong><p>${item.definition}</p> <p class="example">${item.example || ""}</p></li>`;
  }).join('')

})

searchElement.addEventListener('input', debounce(() => {
  const text = searchElement.value;
  worker.postMessage(text);
}, 10))
