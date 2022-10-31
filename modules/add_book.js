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