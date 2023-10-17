const grid = document.querySelector('.grid');

function makeDivs(n) {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement('div');
    div.classList.add('block');
    grid.appendChild(div);
  }
}

makeDivs(16);