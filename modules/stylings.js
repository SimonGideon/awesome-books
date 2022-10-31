import {
  addButton, title, author, list, addBook, addNew, newBook, contact, contactBook
} from './variable.js';
/* initialize page */
newBook.style.display = 'block';
contactBook.style.display = 'none';
addBook.style.display = 'none';

/* navbar links */
list.addEventListener('click', () => {
  newBook.style.display = 'none';
  contactBook.style.display = 'none';
  addBook.style.display = 'block';
  list.style.color = 'blue';
  addNew.style.color = 'black';
  contact.style.color = 'black';
});

addNew.addEventListener('click', () => {
  newBook.style.display = 'block';
  addBook.style.display = 'none';
  contactBook.style.display = 'none';
  list.style.color = 'black';
  addNew.style.color = 'blue';
  contact.style.color = 'black';
});

contact.addEventListener('click', () => {
  newBook.style.display = 'none';
  addBook.style.display = 'none';
  contactBook.style.display = 'block';
  list.style.color = 'black';
  addNew.style.color = 'black';
  contact.style.color = 'blue';
});