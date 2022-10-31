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