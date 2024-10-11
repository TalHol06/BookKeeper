let bookName = "";
let bookAuthor = "";
let pageCount = 0;
let pageGoal = 0;
let readPages = 0;
let readingNotes = [];
let book = [];
let bookShelf = [];

// Code for the "add new book" button
const addNewBook = document.getElementById('add-book-button');

addNewBook.addEventListener("click", function(){
  let j = 0;
  bookName = prompt("Please enter book title:");
  bookAuthor = prompt("Please enter the book's author:");
  pageCount = prompt("Please enter the number of pages:");

   if (!(pageCount > 0)){
     return;
  }

  pageGoal = prompt("Please enter the number of pages you want to set as your daily goal:");
  readPages = prompt("Please enter the number of pages you've read today:");
  const numNotes = prompt("Enter the number of notes you want to add");

  for (i = 0; i < numNotes; i++){
    readingNotes[i] = prompt("Enter your note:");
  }

  book = [bookName, bookAuthor, pageCount, pageGoal, readPages, readingNotes];

  bookShelf.push(book);
  return(bookShelf);
});