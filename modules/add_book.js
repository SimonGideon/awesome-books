import {
  addButton, title, author, list, addBook, addNew, newBook, contact, contactBook
} from './variable.js';
import {removeIt} from './remove-book.js';

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
}

export {drko};