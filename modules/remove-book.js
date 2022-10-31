import {
  addButton, title, author, list, addBook, addNew, newBook, contact, contactBook
} from './variable.js';
  const removebook = () => {
    /* remove button */
    const remove = document.querySelectorAll('.remove');

    remove.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentElement.remove();
        const bookname = item.name;

        /* remove from localStorage */
        const getremove = JSON.parse(localStorage.getItem('books'));

        const newArr = getremove.filter((object) => object.title !== bookname);

        /* update localstorage */
        localStorage.setItem('books', JSON.stringify(newArr));
      });
    });
  }

export {removebook};