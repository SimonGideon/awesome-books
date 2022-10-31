// variables
const addButton = document.getElementById('addButton');
const title = document.getElementById('title');
const author = document.getElementById('author');

const list = document.getElementById('list'); // link LIST
const addBook = document.getElementById('addBook');

const addNew = document.getElementById('addNew'); // link ADDNEW
const newBook = document.getElementById('newBook');

const contact = document.getElementById('contact'); // link CONTACT
const contactBook = document.getElementById('contactBook');

// imports
import { addbook } from './add_book.js';
import {removebook} from './remove-book.js';
import * as stylings from './stylings.js';

/* addBook - hold books after every refresh page */
if (localStorage.getItem('books') !== null) {
  const getbook = JSON.parse(localStorage.getItem('books'));

  getbook.forEach((item) => {
    addBook.innerHTML += `
      <div class="books">
        <p>"${item.title}" by "${item.author}"</p>
        <button class="remove" name="${item.title}">Remove</button>
      </div>
    `;
  });
}
/* ***** */

class Methods {
  constructor(title, author) {
    this.title = title;
    this.author = author;
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