const grid = document.querySelector('.grid');

function makeDivs(e) {
  const n = e.target.value;
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
    grid.appendChild(divRow);
  }
  sketch();
}

const input = document.querySelector('#input');
input.addEventListener('change', makeDivs);

// const eraser = document.querySelector('.eraser');

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
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function sketch() {
  const column = document.querySelectorAll('.column');
  column.forEach(col => {
    col.addEventListener('mouseover', colorCol);
  })
}


