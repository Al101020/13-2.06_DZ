import './board.css';

// console.log('board.js')

function createBoard() {
  const divBoard = document.createElement('div');
  divBoard.classList.add('board');

  const divСolumn1 = document.createElement('div'); //
  divСolumn1.classList.add('divСolumn1');
  divСolumn1.classList.add('column');
  const todo = document.createElement('p');
  todo.classList.add('title');
  todo.textContent = 'TODO';
  divСolumn1.appendChild(todo); // ---  // divСolumn1.appendChild(dr);
  const block1 = document.createElement('div');
  block1.classList.add('block');
  divСolumn1.appendChild(block1); // --
  const addLink1 = document.createElement('p');
  addLink1.classList.add('addLink');
  addLink1.textContent = '+ Add Another card';
  divСolumn1.appendChild(addLink1);
  divBoard.appendChild(divСolumn1);

  const divСolumn2 = document.createElement('div'); //
  divСolumn2.classList.add('divСolumn2');
  divСolumn2.classList.add('column');
  const inProgress = document.createElement('p');
  inProgress.classList.add('title');
  inProgress.textContent = 'IN PROGRESS';
  divСolumn2.appendChild(inProgress); // ---
  const block2 = document.createElement('div');
  block2.classList.add('block');
  divСolumn2.appendChild(block2); // --
  const addLink2 = document.createElement('p');
  addLink2.classList.add('addLink');
  addLink2.textContent = '+ Add Another card';
  divСolumn2.appendChild(addLink2);

  divBoard.appendChild(divСolumn2);

  const divСolumn3 = document.createElement('div'); //
  divСolumn3.classList.add('divСolumn3');
  divСolumn3.classList.add('column');
  const done = document.createElement('p');
  done.classList.add('title');
  done.textContent = 'DONE';
  divСolumn3.appendChild(done); // ---
  const block3 = document.createElement('div');
  block3.classList.add('block');
  divСolumn3.appendChild(block3); // --
  const addLink3 = document.createElement('p');
  addLink3.classList.add('addLink');
  addLink3.textContent = '+ Add Another card';
  divСolumn3.appendChild(addLink3);

  divBoard.appendChild(divСolumn3);

  document.body.appendChild(divBoard);
}

createBoard();
