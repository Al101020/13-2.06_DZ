// TODO: write code here
// import { mdConvert } from 'md-converter';

// console.log('app.js bundled');

import '../components/board/board';
import '../components/board/addAnotherCart';

const board = document.querySelector('.board');
// console.log(board);
board.addEventListener('mousedown', (e) => {
  // console.log('Клик в поле BOARD');
  const carts = document.querySelectorAll('.cart');
  // console.log(carts.length);
  let actualCart;
  if (carts.length === 0) {
    // console.log('нет карточек');
    return;
  }
  // console.log(carts.length);
  // console.log(e.target);
  if (e.target.classList.contains('cart')) {
    console.log(`здесь cart есть, всего - ${carts.length}`);
    actualCart = e.target;
  } else if (e.target.parentElement.classList.contains('cart')) {
    console.log(`У родителя cart есть, всего - ${carts.length}`);
    actualCart = e.target.parentElement;
  } else {
    // console.log('Класса cart нет');
  }
  console.log(actualCart);

  // if (carts.length == 0) {
  //     console.log('нет карточек');
  //     return;
  // } else {
  //     console.log(carts.length);
  //     console.log(e.target);
  //     if (e.target.classList.contains('cart')) {
  //         console.log('здесь cart есть, всего - ' + carts.length);
  //     } else if (e.target.parentElement.classList.contains('cart')) {
  //         console.log('У родителя cart есть, всего - ' + carts.length);
  //     } else {
  //         console.log('Класса cart нет');
  //     }
  // };
});
