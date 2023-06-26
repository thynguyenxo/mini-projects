let myLibrary = [];

class Book {
  constructor(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus ? 'Read' : 'Not Read';
  }
  toggleReadStatus() {
    this.readStatus = this.readStatus === 'Read' ? 'Not Read' : 'Read';
  }
}

function addBookToLibrary() {
  // add object to the myLibrary 
  const userBookTitle = document.getElementById('book-title').value;
  const userBookAuthor = document.getElementById('book-author').value;
  const userReadStatus = document.getElementById('read-status').checked;

  let checkExistingBook = book => Book.title === userBookTitle && Book.author === userBookAuthor;

  if (myLibrary.some(checkExistingBook)) {
    alert('This book already exists in your library')
  }
  else {
    let newBook = new Book(userBookTitle, userBookAuthor, userReadStatus);
    myLibrary.push(newBook);
  }
}

function displayBooks() {
  // display each book onscreen
  // create a div, add book title to the card, loop through the array and display each book detail to the div
  const container = document.querySelector('.container');

  // remove existing cards first and replace with new cards in the loop
  if (myLibrary.length >= 1) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const readStatus = document.createElement('button');
    const removeButton = document.createElement('button');

    card.className = 'card';
    title.className = 'title';
    author.className = 'author';
    readStatus.className = 'readStatus'
    removeButton.className = 'removeBookButton'
    removeButton.innerHTML = 'Remove'

    container.appendChild(card); // remember to append div container to HTML file
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(readStatus);
    card.appendChild(removeButton);
    title.textContent = 'Book title: ' + myLibrary[i].title;
    author.textContent = 'Book author: ' + myLibrary[i].author;
    readStatus.textContent = myLibrary[i].readStatus;
    readStatus.style.marginTop = '2em';
    readStatus.style.marginBottom = '1em';
    toggleReadStatusButtonStyling();


    readStatus.addEventListener('click', () => {
      myLibrary[i].toggleReadStatus();
      readStatus.textContent = myLibrary[i].readStatus;
      toggleReadStatusButtonStyling();
    })

    // Set initial button text and background color
    function toggleReadStatusButtonStyling() {
      if (myLibrary[i].readStatus === 'Not Read') {
        readStatus.style.backgroundColor = '#e63946';
        readStatus.style.color = '#fffffe'
      } else {
        readStatus.style.backgroundColor = '#06d6a0';
        readStatus.style.color = '#fffffe'
      }
    }

    removeButton.addEventListener('click', () => {
      // set bookIndex for each card; then splice from the array when click on the remove button
      let bookIndex = card.setAttribute('data-index', i);
      myLibrary.splice(bookIndex, 1);
      card.remove();
    });
  }
}

const form = document.getElementById('newBookForm');
const modal = document.querySelector('.new-book-modal')
const newBookButton = document.querySelector('.addBooks');
const addBookButton = document.getElementById('add-book-btn');

// click button to populate a modal form
newBookButton.addEventListener('click', () => {
  modal.showModal();
})

window.onclick = function (event) {
  if (event.target == modal) {
    modal.close();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  form.reset();
  displayBooks();
  modal.close();
})


// update current year in footer attribution
const footerCurrentYear = document.querySelector('.footer-current-year');
let date = new Date().getFullYear();
footerCurrentYear.innerHTML = date;
