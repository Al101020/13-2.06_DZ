let actualCart;
let parentСolumn;

const onMouseOver = (e) => { // console.log(e); // console.log('onMouseOver');
  actualCart.style.top = `${e.clientY - parentСolumn.top}px`;
  actualCart.style.left = `${e.clientX - parentСolumn.left}px`;
};

const onMouseUp = () => { // console.log('onMouseUp');
  actualCart.classList.remove('dragged');
  actualCart = undefined;

  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver);
};

function mousedown(e) {
  e.preventDefault();

  const carts = document.querySelectorAll('.cart');

  if (carts.length === 0) { // console.log('нет карточек');
    return;
  }
  if (e.target.classList.contains('cart')) { // console.log(`здесь cart есть, всего - ${carts.length}`);
    actualCart = e.target;
  } else if (e.target.parentElement.classList.contains('cart')) { // console.log(`У родителя cart-очки есть, всего - ${carts.length}`);
    actualCart = e.target.parentElement;
  } else { // console.log('Класса cart нет');
    actualCart = undefined;
    return;
  } //   console.log(actualCart);   // if (e.target.classList.con)    // actualCart = e.target;

  actualCart.classList.add('dragged'); // console.log(actualCart);   // console.log(actualCart.classList);

  document.documentElement.addEventListener('mouseup', onMouseUp);
  document.documentElement.addEventListener('mouseover', onMouseOver);

  parentСolumn = actualCart.parentElement; // console.log(parentСolumn);

  // ---
  parentСolumn = parentСolumn.getBoundingClientRect(); // console.log(parentСolumn);
}

export { mousedown, onMouseUp, onMouseOver };
