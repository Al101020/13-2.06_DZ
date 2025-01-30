const addAnotherCart = document.querySelectorAll('.addLink');
// console.log(addAnotherCart);

let numerCart = 0;

for (let i = 0; i < addAnotherCart.length; i += 1) { // console.log(addAnotherCart[i]);
  addAnotherCart[i].addEventListener('click', () => {
    /// onsole.log('click');
    const columns = document.querySelectorAll('.column');
    // console.log(columns[i]);
    console.log(`колонка - ${[i + 1]}`);

    let cart = document.createElement('div');
    cart.classList.add('cart');
    numerCart += 1;
    cart.textContent = 'Карточка №' + numerCart;
    // console.log(numerCart);
    // let temp = columns[i].querySelector('.block');
    // console.log(temp);
    columns[i].querySelector('.block').appendChild(cart);
  });
}
