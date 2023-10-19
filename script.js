const DEFAULT_MODE = '#000';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector('.grid');

function changeSize(size) {
  currentSize = size;
  makeDivs();
}

makeDivs();

function setColor(color) {
  currentColor = color;
  console.log(currentColor);
}

function makeDivs() {
  const n = currentSize;
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  for (let i = 0; i < n; i++) {
    const divRow = document.createElement('div');
    for (let j = 0; j < n; j++) {
      const divCol = document.createElement('div');
      divCol.classList.add('column')
      divRow.appendChild(divCol);
    }
    divRow.classList.add('row');
    divRow.style.display = 'grid';
    divRow.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    grid.appendChild(divRow);
  }
  grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  sketch();
}

const input = document.querySelector('#input');
input.addEventListener('change', ((e) => {
  console.log(e.target);
  changeSize(e.target.value);
}));



function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorCol(e) {
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  const div = e.target;
  if (currentColor === 'random') {
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else {
    div.style.backgroundColor = currentColor;
  }
}

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', (() => {setColor('white')}));

const randomColor = document.querySelector('.random');
randomColor.addEventListener('click', (() => {setColor('random')}));

const select = document.querySelector('#select');
select.addEventListener('input', ((e) => {
  setColor(e.target.value);
}));

function sketch() {
  const column = document.querySelectorAll('.column');
  column.forEach(col => {
    col.addEventListener('mouseover', colorCol);
  })
}


