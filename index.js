const addButton = document.getElementById('addButton');
const title = document.getElementById('title');
const author = document.getElementById('author');

const list = document.getElementById('list'); // link LIST
const addBook = document.getElementById('addBook');

const addNew = document.getElementById('addNew'); // link ADDNEW
const newBook = document.getElementById('newBook');

const contact = document.getElementById('contact'); // link CONTACT
const contactBook = document.getElementById('contactBook');

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
/* ****** */

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