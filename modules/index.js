import {drko} from './add_book.js';
import  {
  addButton, title, author, list, addBook, addNew, newBook, contact, contactBook
} from './variable.js';
import * as stylings from './stylings.js';
drko();

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