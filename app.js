// Book constructor
function Book(author, title, isbn) {
   this.author = author;
  this.title = title;
  this.isbn = isbn;
 } 

// UI constructor
function UI() {}


// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  console.log('test');
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instaniate a book
  const book = new Book(title, author, isbn);

  // Instantiate UI

  console.log(book);

  e.preventDefault();
});
