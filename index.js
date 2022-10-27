/* eslint-disable no-plusplus */
const books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: 'The Power of Now', author: 'Eckhart Tolle' },
];

function removeBook() {
  const removeBtn = document.querySelectorAll('.remove-btn');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', () => {
      const book = removeBtn[i].parentElement;
      book.remove();
    });
  }
}

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

const form = document.querySelector('#form');
const titled = document.querySelector('#title');
const authored = document.querySelector('#author');
const ids = books.length + 1;
function addBook() {
  books.push({ id: ids, title: titled.value, author: authored.value});
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  displayBook();
});
