let actualCart;
let overTarget; // что под мышкой, навели мышь
let rectOverTarget; // координаты прямоугольника под мышкой
let mouseY; // Y мышки
let parent; // Родитель куда вставлять карточку
let parentWas; // Родитель был
const board = document.querySelector('.board');

function rect(element) {
  rectOverTarget = element.getBoundingClientRect();
}

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

const onMousemove = (e) => {
  if (!actualCart) return;
  overTarget = e.target;
  rect(overTarget); // определяем координаты прямоугольника
  actualCart.style.position = 'absolute';
  actualCart.style.zIndex = '998';
  mouseY = e.clientY;
  actualCart.style.top = `${e.clientY}px`;
  actualCart.style.left = `${e.clientX}px`;
  board.appendChild(actualCart);
};

const onMouseUp = (e) => {
  if (!actualCart) return;
  e.preventDefault();
  actualCart.removeAttribute('style');
  if (overTarget.classList.contains('cart')) {
    parent = overTarget.parentElement;
    if (mouseY - rectOverTarget.y > rectOverTarget.height / 2) {
      overTarget.after(actualCart);
    } else {
      parent.insertBefore(actualCart, overTarget);
    }
  } else if (overTarget.classList.contains('text')) {
    parent = overTarget.parentElement.parentElement;
    if (mouseY - rectOverTarget.y > rectOverTarget.height / 2) {
      overTarget.parentElement.after(actualCart);
    } else {
      parent.insertBefore(actualCart, overTarget.parentElement);
    }
  } else if (overTarget.classList.contains('divClose')) {
    parent = overTarget.parentElement.parentElement;
    parent.insertBefore(actualCart, overTarget.parentElement);
  } else if (overTarget.classList.contains('block')) {
    parent = overTarget;
    parent.appendChild(actualCart);
  } else { // console.log('Под мышкой НЕТ: cart, text, divClose. Вернуть назад');
    parentWas.appendChild(actualCart);
  }
  actualCart.classList.remove('dragged');
  actualCart = undefined;
  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mousemove', onMousemove);

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
  parentWas = actualCart.parentElement;
  actualCart.classList.add('dragged');
  document.documentElement.addEventListener('mouseup', onMouseUp);
  document.documentElement.addEventListener('mousemove', onMousemove);
}

export {
  mousedown, onMouseUp, onMousemove, saveBoard,
};
