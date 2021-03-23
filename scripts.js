let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `by ${this.author}<br>${this.pages} pages`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, false);
const greatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, true);
const catch22 = new Book("Catch 22", "Joseph Heller", 453, true);
const mobyDick = new Book("Moby Dick", "Herman Melville", 378, false);
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 863, true);
const mockingbird = new Book("To Kill A Mockingbird", "Harper Lee", 281, false);

// display function

const cardContainer = document.querySelector("#cardContainer");

function showLibrary(libraryArray) {
    libraryArray.forEach((book, i) => {
        setTimeout(() => createCard(book, i), i * 50);
    });
}

function createCard(book, index) {
    // create elements
    const card = document.createElement("div");
    const title = document.createElement("p");
    const info = document.createElement("p");
    const readStatus = document.createElement("p");
    const deleteButton = document.createElement("p")

    // style, fill and index elements
    card.className = (book.read) ? "card read" : "card";
    card.setAttribute("data-index", `${index}`);
    title.textContent = book.title;
    title.className = "title";
    info.innerHTML = book.info();
    info.className = "info";
    readStatus.textContent = (book.read) ?
        "read" : "unread";
    readStatus.className = "readStatus";
    deleteButton.textContent = "\u2716";
    deleteButton.className = "deleteKey";

    // add elements to card
    card.appendChild(deleteButton);
    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(readStatus);

    // event listeners
    card.addEventListener('click', toggleCard);
    deleteButton.addEventListener('click', deleteCard);

    // insert card
    cardContainer.appendChild(card);
}

function toggleCard() {
    function toggleReadStatus() {
        thisBook.read = (thisBook.read === true) ? false : true;
    }
    
    this.classList.toggle("read"); // style
    const thisBook = myLibrary[this.dataset.index];
    let cardReadStatus = this.lastChild;
    setTimeout(() => {
        cardReadStatus.textContent = (thisBook.read) ? "read" : "unread";
    }, 20); // yes I know I'm cheating and this should be a transition
    toggleReadStatus(this);
}

function deleteCard(e) {
    function removeBook(button, e) {
        e.stopPropagation();
        if (confirm("Delete book permanently?")) {
            myLibrary.splice(button.parentElement.dataset.index, 1);
            button.parentElement.remove();
        }
        console.log(myLibrary)
    }

    removeBook(this, e);
    emptyLibrary();
    showLibrary(myLibrary);
}


function emptyLibrary() {
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
}

// temporary to adjust formatting

myLibrary = [theHobbit, greatGatsby, catch22, mobyDick, donQuixote, mockingbird];

showLibrary(myLibrary);

