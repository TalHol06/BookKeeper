let bookName = "";
let bookAuthor = "";
let pageCount = 0;
let pageGoal = 0;
let readPages = 0;
let readingNotes = [];
let book = [];
let bookShelf = [];



const newBookTab = function(){
  document.getElementById("newBookForm").style.visibility = "visible";
}


const addNewBook = document.getElementById('add-book-button');
addNewBook.addEventListener("click", function(){
  let beginrun = "start"
  bookName = document.getElementById('bName').value;
  bookAuthor = document.getElementById('bAuthor').value;
  pageCount = Number(document.getElementById('pgCount').value);
  pageGoal = 0;
  readPages = 0;
  readingNotes = [];
   if (!(pageCount > 0)){
    document.getElementById('pgCount').value = "$naN"; 
    return;
  }

  book = [bookName, bookAuthor, pageCount, pageGoal, readPages, readingNotes];

  bookShelf.push(book);
  bookList();
  displayrun();
  document.getElementById("bName").value = " ";
  document.getElementById("bAuthor").value = " ";
  document.getElementById("pgCount").value = " ";
  document.getElementById("newBookForm").style.visibility = "hidden";
  return;
});

const bookList = function(){
  for(let x = 0; x != bookShelf.length; x++){
    const bookId = bookShelf[x][0].replaceAll(/\s+/g, "");
    if (!document.getElementById(bookId)){
      const newP = document.createElement('p');
      newP.textContent = bookShelf[x][0];
      document.getElementById('bookContainer').appendChild(newP);
      newP.setAttribute("id", bookShelf[x][0].replaceAll(/\s+/g, ""));
      newP.setAttribute("class", "active-check");
      newP.addEventListener('click',selectBook);

      const newSelect = document.createElement('select');
      newSelect.setAttribute("class","content");
      newSelect.setAttribute("id",bookId + "-bookStatus");
      document.getElementById('bookContainer').appendChild(newSelect);

      let newOption = document.createElement('option');
      newOption.setAttribute('value','Unread');
      newOption.textContent = "Unread";
      newSelect.appendChild(newOption);
      newOption = document.createElement('option');
      newOption.setAttribute('value','Reading');
      newOption.textContent = "Reading";
      newSelect.appendChild(newOption);
      newOption = document.createElement('option');
      newOption.setAttribute('value','Read');
      newOption.textContent = "Read";
      newSelect.appendChild(newOption);
    }
  }
}

const selectBook = function(event){
  let x = event.target;
  let i = 0;
  let j = 0
  while (i == 0){
    if(x.textContent == bookShelf[j][0]){
      book = bookShelf[j];
      displayrun();
      i++;
    }
    else if(j == 10){
      i++;
    }
    else{
      j++;
    }
  }
}

const displayrun = function(){
  document.getElementById("currentName").textContent = book[0];
  document.getElementById("currentAuthor").textContent = book[1];
  document.getElementById("currentPageCount").textContent = book[2];
  document.getElementById("currentReadPages").textContent = book[3];
  document.getElementById("currentPageGoal").textContent = book[4];
  const myDiv = document.getElementById("container")
  myDiv.innerHTML = "";
  for(let x = 0; x < book[5].length; x++){
    const newDiv = document.createElement('div');
    newDiv.textContent = book[5][x];
    document.getElementById('container').appendChild(newDiv);
    newDiv.setAttribute("id","readBlock");
  }
  
}

const currentGoal = function() {
  let numberInput = document.getElementById('numberGoal').value;
  let messageElement = document.getElementById('message');
  if (!isNaN(numberInput) && numberInput.trim() !=='') {
      book[4] = numberInput;
  } else {
    document.getElementById('numberGoal').value = "$naN";
    return;
  }
  displayrun();
  return;
};

const readPagesInput = function(){
  let x = document.getElementById("pages").value;
  if (isNaN(parseInt(x))==true){
    document.getElementById("pages").value = "#naN";
    return;
  } else {
    readPages = document.getElementById("pages").value;
    book[3] = readPages;
    document.getElementById("pages").value = " ";
  }
  displayrun();
  return;
}

const readPagesReset = function(){
  readPages = 0;
  book[3] = readPages;
  document.getElementById("pages").value = " ";
  displayrun();
  return;
}

const addReadingNotes = function () {
  book[5].push(document.getElementById("notes").value);
  const newDiv = document.createElement('div');
  newDiv.textContent = document.getElementById("notes").value;
  document.getElementById('container').appendChild(newDiv);
  newDiv.setAttribute("id","readBlock");
  document.getElementById("notes").value = " ";
  return;
}

window.addEventListener('beforeunload', function (event) {
  refreshData();
});

function refreshData() {
  localStorage.setItem('bookShelf', JSON.stringify(bookShelf));
}
document.addEventListener('DOMContentLoaded', function () {
  startData();
});

function startData() {
  const storedData = localStorage.getItem('bookShelf');
  bookShelf = storedData ? JSON.parse(storedData) : [];
  bookList();
}

//Reset bookShelf FOR TESTING ONLY
const resetArray = function(){
  bookShelf = [];
  console.log("bookShelf Cleared");
}