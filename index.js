const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  strtBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

let id = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.strtBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);

function colorSwitcher() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

function onStartClick() {
  id = setInterval(colorSwitcher, 1000);
  refs.strtBtn.setAttribute("disabled", true);
}

function onStopClick() {
  clearInterval(id);
  refs.strtBtn.removeAttribute("disabled");
}
