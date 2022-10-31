import {
  addButton, title, author, addBook,
} from './variable.js';

const drko = () => {
  class Methods {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    addbook = () => {
      addBook.innerHTML += `
      <div class="books">
        <p>"${title.value}" by "${author.value}"</p>
        <button class="remove" name="${title.value}">Remove</button>
      </div>
    `;
      const book1 = { title: this.title, author: this.author };
      if (localStorage.getItem('books') === null) {
        const books = [];
        books.push(book1);
        localStorage.setItem('books', JSON.stringify(books));
      } else {
        const books = JSON.parse(localStorage.getItem('books'));
        books.push(book1);
        localStorage.setItem('books', JSON.stringify(books));
      }
    }

    removebook = () => {
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
  }

  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    /* add book with method class */
    const ui = new Methods(title.value, author.value);
    ui.addbook();

    /* remove book with method class */
    ui.removebook();

    title.value = '';
    author.value = '';
  });
};

export default drko;