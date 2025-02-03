// TODO: write code here     // import { mdConvert } from 'md-converter';
// console.log('app.js bundled');

import '../components/board/board';
import '../components/board/addAnotherCart';

let actualCart;
const board = document.querySelector('.board'); // console.log(board);
board.addEventListener('mousedown', (e) => { // console.log('Клик в поле BOARD');
  const carts = document.querySelectorAll('.cart'); // console.log(carts.length);

  if (carts.length === 0) { // console.log('нет карточек');
    return;
  } // console.log(carts.length);   // console.log(e.target);
  if (e.target.classList.contains('cart')) {
    console.log(`здесь cart есть, всего - ${carts.length}`);
    actualCart = e.target;
  } else if (e.target.parentElement.classList.contains('cart')) { // console.log(`У родителя cart-очки есть, всего - ${carts.length}`);
    actualCart = e.target.parentElement;
  } else { // console.log('Класса cart нет');
    return;
  } //
  console.log(actualCart);
});

// const close = document.querySelector('.close');
// console.log(close);

// ---------------

// console.log(board.children);
window.addEventListener('beforeunload', () => {
  // const FormData = {};
});
