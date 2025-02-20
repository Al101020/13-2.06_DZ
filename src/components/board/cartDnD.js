let actualCart;
let parentСolumn;
let parentСolumnGetBCRect;
let overTarget; // что под мышкой, навели мышь
let parent; // Родитель куда вставлять карточку

const board = document.querySelector('.board');

function saveBoard() {
  const columns = board.querySelectorAll('.column');
  const boardState = [];
  columns.forEach((column) => {
    const columnState = {
      title: column.querySelector('.title').textContent,
      tasks: [],
    };
    const tasks = column.querySelectorAll('.cart');
    tasks.forEach((task) => {
      columnState.tasks.push({
        text: task.querySelector('p').textContent,
      });
    });
    boardState.push(columnState);
  });
  localStorage.setItem('boardState', JSON.stringify(boardState));
}

const onMouseOver = (e) => {
  overTarget = e.target;

  actualCart.style.top = `${e.clientY - parentСolumnGetBCRect.top}px`;
  actualCart.style.left = `${e.clientX - parentСolumnGetBCRect.left}px`;
};

const onMouseUp = (e) => {
  e.preventDefault();
  actualCart.removeAttribute('style');

  if (overTarget.classList.contains('cart')) {
    parent = overTarget.parentElement;
    parent.insertBefore(actualCart, overTarget);
  } else if (overTarget.classList.contains('text')) {
    parent = overTarget.parentElement.parentElement;
    parent.insertBefore(actualCart, overTarget.parentElement);
  } else if (overTarget.classList.contains('divClose')) {
    parent = overTarget.parentElement.parentElement;
    parent.insertBefore(actualCart, overTarget.parentElement);
  } else if (overTarget.classList.contains('block')) {
    parent = overTarget;
    parent.appendChild(actualCart);
  } else {
    console.log('Под мышкой НЕТ: cart, text, divClose, block. Не надо ничего делать');
  }

  actualCart.classList.remove('dragged');
  actualCart = undefined;

  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver);

  saveBoard();
};

function mousedown(e) { // Событие происходит при нажатии кнопки мыши
  e.preventDefault();
  if (e.target.classList.contains('divClose')) {
    return;
  }

  const carts = document.querySelectorAll('.cart');

  if (carts.length === 0) {
    return;
  }

  if (e.target.classList.contains('cart')) {
    actualCart = e.target;
  } else if (e.target.parentElement.classList.contains('cart')) {
    actualCart = e.target.parentElement;
  } else {
    actualCart = undefined;
    return;
  }

  actualCart.classList.add('dragged');

  document.documentElement.addEventListener('mouseup', onMouseUp);
  document.documentElement.addEventListener('mouseover', onMouseOver);

  parentСolumn = actualCart.parentElement;
  parentСolumnGetBCRect = parentСolumn.getBoundingClientRect();
}

export {
  mousedown, onMouseUp, onMouseOver, saveBoard,
};
