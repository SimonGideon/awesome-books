/* eslint-disable no-plusplus */
const form = document.querySelector('#form');
const titled = document.querySelector('#title');
const authored = document.querySelector('#author');

class Books {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

let books = [];
const ids = books.length + 1;
const bookShelve = new Books(ids, titled.value, authored.value);

function removeBook() {
  const removeBtn = document.querySelectorAll('.remove-btn');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', () => {
      const book = removeBtn[i].parentElement;
      book.remove();
    });
  }
}

// saving the objects in local storage
const localBook = JSON.stringify(books);
localStorage.setItem('books', localBook);
const BooksObj = JSON.parse(localStorage.getItem('books'));

function displayBook() {
  const shelveDiv = document.getElementById('bookList');
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.author;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(removeBtn);
    shelveDiv.appendChild(bookDiv);
  }
  removeBook();
}

displayBook();

function addBook() {
  if (BooksObj !== null) {
    books.push(bookShelve);
  } else {
    books = BooksObj;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  displayBook();
});
