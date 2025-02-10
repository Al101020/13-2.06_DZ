import './board.css';

function column(board, numerColumn, titleColumn) {
  const divСolumn = document.createElement('div');
  divСolumn.classList.add('column');
  divСolumn.classList.add([`divСolumn${numerColumn}`]);

  const pTitle = document.createElement('p');
  pTitle.classList.add('title');
  pTitle.textContent = titleColumn;
  divСolumn.appendChild(pTitle);

  const block = document.createElement('div');
  block.classList.add('block');
  divСolumn.appendChild(block);

  const addLink = document.createElement('p');
  addLink.classList.add('addLink');
  addLink.textContent = '+ Add Task';
  divСolumn.appendChild(addLink);

  const formCart = document.createElement('form');
  formCart.classList.add('formCart');
  formCart.classList.add('displayNone');
  const inputText = document.createElement('input');
  inputText.classList.add('inputText');
  inputText.type = 'text';
  inputText.setAttribute('placeholder', 'Введите текст...');
  formCart.appendChild(inputText);

  const formButtons = document.createElement('div');
  formButtons.classList.add('formButtons');
  const buttonAdd = document.createElement('div');
  buttonAdd.classList.add('buttonAdd');
  buttonAdd.textContent = 'Add';
  formButtons.appendChild(buttonAdd);
  const buttonX = document.createElement('div');
  buttonX.classList.add('buttonX');
  buttonX.textContent = 'X';
  formButtons.appendChild(buttonX);
  formCart.appendChild(formButtons);

  divСolumn.appendChild(formCart);

  board.appendChild(divСolumn);
}

function createBoard() {
  const divBoard = document.createElement('div');
  divBoard.classList.add('board');
  column(divBoard, 1, 'TODO');
  column(divBoard, 2, 'IN PROGRESS');
  column(divBoard, 3, 'DONE');
  document.body.appendChild(divBoard);
}

createBoard();
