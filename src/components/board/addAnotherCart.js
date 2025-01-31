const addAnotherCart = document.querySelectorAll('.addLink');

let numerCart = 0;

function addAnotherCartClick(e) {
  const block = e.target.parentElement.querySelector('.block');

  const cart = document.createElement('div');
  cart.classList.add('cart');
  numerCart += 1;

  // cart.textContent = `Карточка №${numerCart}`;
  const p = document.createElement('p');
  p.textContent = `Карточка №${numerCart}`;
  p.classList.add('text');
  cart.appendChild(p);

  const inputText = document.createElement('input');
  inputText.type = 'text';
  // console.log(inputText);

  cart.appendChild(inputText);

  block.appendChild(cart);

  // console.log(block.children.querySelector('input'));
  inputText.addEventListener('blur', () => {
    const divText = document.createElement('div');
    divText.textContent = inputText.value;
    cart.appendChild(divText);
    cart.removeChild(inputText);

    // console.log(inputText.value);
    // cart.removeChild(inputText);
    // console.log(e);

    // console.log(e.target.parentElement); // .querySelector('input')
  });
}

for (let i = 0; i < addAnotherCart.length; i += 1) {
  addAnotherCart[i].addEventListener('click', (e) => {
    addAnotherCartClick(e);
  });
}
