// import "./board.css";

// console.log('board.js')

function createBoard() {
  const divBoard = document.createElement('div');
  divBoard.style.display = 'flex';
  divBoard.style.backgroundColor = 'blue';
  divBoard.style.marginLeft = 'auto';
  divBoard.style.marginRight = 'auto';
  divBoard.style.width = '600px';
  divBoard.style.height = '200px';
  divBoard.style.paddingLeft = '3px';
  divBoard.style.paddingRight = '3px';

  divBoard.classList.add('board');
  // document.body.appendChild(divBoard);

  const divСolumn1 = document.createElement('div');
  divСolumn1.style.display = 'flex';
  divСolumn1.style.backgroundColor = '#FFFFFF';
  divСolumn1.style.margin = 'auto';
  divСolumn1.style.width = '193px';
  divСolumn1.style.height = '190px';
  divСolumn1.classList.add('board');
  divBoard.appendChild(divСolumn1);

  const divСolumn2 = document.createElement('div');
  divСolumn2.style.display = 'flex';
  divСolumn2.style.backgroundColor = '#FFFFFF';
  divСolumn2.style.margin = 'auto';
  divСolumn2.style.width = '193px';
  divСolumn2.style.height = '190px';
  divСolumn2.classList.add('board');
  divBoard.appendChild(divСolumn2);

  const divСolumn3 = document.createElement('div');
  divСolumn3.style.display = 'flex';
  divСolumn3.style.backgroundColor = '#FFFFFF';
  divСolumn3.style.margin = 'auto';
  divСolumn3.style.width = '193px';
  divСolumn3.style.height = '190px';
  divСolumn3.classList.add('board');
  divBoard.appendChild(divСolumn3);

  document.body.appendChild(divBoard);
}

createBoard();
