import drko from './actions.js';
import {
  addBook,
} from './variable.js';
import stylings from './stylings.js';
import { time } from './time.js';

stylings();
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

time();
