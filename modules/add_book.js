import * as variables from './variable.js';
export let addbook = () => {
  variables.addBook.innerHTML += `
    <div class="books">
      <p>"${variables.title.value}" by "${variables.author.value}"</p>
      <button class="remove" name="${variables.title.value}">Remove</button>
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