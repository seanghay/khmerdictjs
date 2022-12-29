import './main.css'
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
