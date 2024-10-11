let bookName = "";
let bookAuthor = "";
let pageCount = 0;
let pageGoal = 0;
let readPages = 0;
let readingNotes = [];
let book = {};
let bookShelf = [];

const addNewBook = document.getElementById('add-book-button');

addNewBook.addEventListener("click", function(){
  let bookTitle = prompt("Please enter book title:");
  let bookAuthor = prompt("Please enter the book's author:");
  let pageCount = prompt("Please enter the number of pages:");

  if (!(pageCount > 0)){
    return;
  }

  book = {
    title: bookTitle,
    author: bookAuthor,
    numPages: Number(pageCount)
  };
  
  bookShelf.push(book);
  console.log(bookShelf);
})