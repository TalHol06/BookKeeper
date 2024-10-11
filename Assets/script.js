let bookName = "";
let bookAuthor = "";
let pageCount = 0;
let pageGoal = 0;
let readPages = 0;
let readingNotes = [];
let book = [];
let bookShelf = [];

const addReadingNotes = function () {
    readingNotes.push(document.getElementById("notes").value);
    const newDiv = document.createElement('div');
    newDiv.textContent = document.getElementById("notes").value;
    document.getElementById('container').appendChild(newDiv);
    newDiv.setAttribute("id","readBlock");

}