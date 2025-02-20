import { mousedown, saveBoard } from './cartDnD';

export default function loadBoard() { // console.log('function loadBoard');
  const savedState = localStorage.getItem('boardState');
  if (savedState) {
    const boardState = JSON.parse(savedState);
    // Восстановление доски и карточек из сохраненного состояния
    boardState.forEach((columnState, index) => {
      if (columnState.tasks.length === 0) {
        return;
      }
      const column = document.querySelector(`.divСolumn${index + 1}`);// console.log(column);
      // let task;
      columnState.tasks.forEach((task) => { // Создайте элементы карточек на основе savedState
        // console.log(task);
        const cart = document.createElement('div');
        cart.classList.add('cart');

        const divClose = document.createElement('div');
        divClose.textContent = 'x';
        divClose.classList.add('divClose');
        divClose.classList.add('displayNone');
        function removeParent(event) { // функция удаления задачи(родителя)
          divClose.removeEventListener('click', removeParent);
          event.target.parentElement.remove();
          saveBoard(); // сохраняем доску в localStorage
        }
        divClose.addEventListener('click', removeParent);
        cart.appendChild(divClose);
        function cartMouseover() {
          if (divClose.classList.contains('displayNone')) {
            divClose.classList.remove('displayNone');
          }
        }
        function cartMouseout() {
          if (!divClose.classList.contains('displayNone')) {
            divClose.classList.add('displayNone');
          }
        }
        cart.addEventListener('mouseover', cartMouseover); // появление кнопки - X
        cart.addEventListener('mouseout', cartMouseout); // пропадание кнопки - X

        cart.addEventListener('mousedown', mousedown);

        const p = document.createElement('p');
        p.classList.add('text');
        p.textContent = task.text;
        cart.appendChild(p);
        const block = column.querySelector('.block');
        block.appendChild(cart);
      });
    });
  }
}
