const addAnotherCart = document.querySelectorAll('.addLink');

let numerCart = 0;

function addAnotherCartClick(e) {
  const block = e.target.parentElement.querySelector('.block');
  const cart = document.createElement('div');
  cart.classList.add('cart');
  numerCart += 1;
  cart.textContent = `Карточка №${numerCart}`;
  block.appendChild(cart);
}

for (let i = 0; i < addAnotherCart.length; i += 1) {
  addAnotherCart[i].addEventListener('click', (e) => {
    addAnotherCartClick(e);
  });
}
