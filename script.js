const grid = document.querySelector('.grid');

function makeDivs(n) {
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
}

makeDivs(16);