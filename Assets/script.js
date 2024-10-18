let bookName = "";
let bookAuthor = "";
let pageCount = 0;
let pageGoal = 0;
let readPages = 0;
let readingNotes = [];
let book = [];
let bookShelf = [];


const addNewBook = document.getElementById('add-book-button');

addNewBook.addEventListener("click", function(){
  let j = 0;
  bookName = prompt("Please enter book title:");
  bookAuthor = prompt("Please enter the book's author:");
  pageCount = prompt("Please enter the number of pages:");

   if (!(pageCount > 0)){
     return;
  }

  book = [bookName, bookAuthor, pageCount, pageGoal, readPages, readingNotes];

  bookShelf.push(book);
  return(bookShelf);
});
const readPagesInput = function(){
  let x = document.getElementById("pages").value;
  if (isNaN(parseInt(x))==true){
    document.getElementById("pages").value = "#naN";
  } else {
    readPages = document.getElementById("pages").value;
    book[4] = readPages;
    document.getElementById("pages").value = " ";
  }
}
const addReadingNotes = function () {
    readingNotes.push(document.getElementById("notes").value);
    const newDiv = document.createElement('div');
    newDiv.textContent = document.getElementById("notes").value;
    document.getElementById('container').appendChild(newDiv);
    newDiv.setAttribute("id","readBlock");

}
const currentGoal = function() {
  let x = document.getElementById("numberInput").value; 
    let numberInput = document.getElementById('numberInput').value;
    console.log("Input value", numberInput);
    let messageElement = document.getElementById('message');
    if (!isNaN(numberInput) && numberInput.trim() !=='') {
        localStorage.setItem('currentGoal', numberInput);
        console.log("Stored in local storage", numberInput);
    } else {
        messageElement.textContent = "#naN";
        console.log("Invalid input")
    }
  };
