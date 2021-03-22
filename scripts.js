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

function createCard(book) {
    const card = document.createElement("div");
    card.className = (book.read) ? "card read" : "card";
    const title = document.createElement("p");
    title.textContent = book.title;
    title.className = "title";
    const info = document.createElement("p");
    info.innerHTML = book.info();
    info.className = "info";
    const readStatus = document.createElement("p");
    readStatus.textContent = (book.read) ?
        "read" : "unread";
    readStatus.className = "readStatus";
    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(readStatus);
    cardContainer.appendChild(card);
}

// temporary to adjust formatting

// showBook(theHobbit);

myLibrary = [theHobbit, greatGatsby, catch22, mobyDick, donQuixote, mockingbird];

showLibrary(myLibrary);