const addAnotherCart = document.querySelectorAll('.addLink');
// console.log(addAnotherCart);
for (let i = 0; i < addAnotherCart.length; i += 1) { // console.log(addAnotherCart[i]);
  addAnotherCart[i].addEventListener('click', () => {
    /// onsole.log('click');
    // const columns = document.querySelectorAll('.column');
    // console.log(columns[i]);
    console.log(`колонка - ${[i + 1]}`);
  });
}
