const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "The Power of Now", author: "Eckhart Tolle" },
  ]
  function displayBook() {
      const shelveDiv = document.getElementById("bookList");
      for (let i = 0; i < books.length; i++) {
          const book = books[i];
          const bookDiv = document.createElement("div");
          bookDiv.classList.add("book");
          const bookTitle = document.createElement("h3");
          bookTitle.classList.add("book-title");
          bookTitle.textContent = book.title;
          const bookAuthor = document.createElement("p");
          bookAuthor.classList.add("book-author");
          bookAuthor.textContent = book.author;
          const removeBtn = document.createElement("button");
          removeBtn.classList.add("remove-btn");
          removeBtn.textContent = "Remove";
          bookDiv.appendChild(bookTitle);
          bookDiv.appendChild(bookAuthor);
          bookDiv.appendChild(removeBtn);
          shelveDiv.appendChild(bookDiv);
      }
      removeBook();
  }

  displayBook();
  function remove(i) {
    books.splice(i, 1);
    displayBook();
}
  function removeBook() {
      const removeBtn = document.querySelectorAll(".remove-btn");
      for (let i = 0; i < removeBtn.length; i++) {
          removeBtn[i].addEventListener("click", function () {
              const book = removeBtn[i].parentElement;
              book.remove();
          });
      }
  }

  function addBook() {
    const form = document.querySelector("#form");
    const titled = document.querySelector("#title").value;
    const authored = document.querySelector("#author").value;
    const ids = books.length+1;
    books.push({ id: ids, title: titled, author: authored });
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
  });
  