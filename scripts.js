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

// element locators

const cardContainer = document.querySelector("#cardContainer");
const newBookButton = document.querySelector("#newBook");
const newBookForm = document.querySelector("form");
const textValues = document.querySelectorAll(".textInput");
const unreadValue = document.querySelector('[name="readOrNot"]');
const submitButton = document.querySelector("#submit");
const libraryOrder = document.querySelector("#order");

// event listeners etc.

libraryOrder.addEventListener('change', function() {
    reorderLibrary(this.value);
});
newBook.addEventListener('click', toggleForm);
newBookForm.onsubmit = submitNewBook;


// display function

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

    // add event listeners
    card.addEventListener('click', toggleCard);
    deleteButton.addEventListener('click', deleteCard);

    // insert card
    cardContainer.appendChild(card);
}

// card manipulation functions

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

function reorderLibrary(order) {
    switch (order) {
        case "toread" :
            myLibrary.sort((a, b) => (a.read < b.read) ? -1 : 1);
            break;
        case "alpha" :
            myLibrary.sort((a, b) => {
                return (a.title.charAt(0) < b.title.charAt(0)) ? -1 : 1});
            break;
        case "shortest" :
            myLibrary.sort((a, b) => (a.pages < b.pages) ? -1 : 1);
            break;
        case "longest" :
            myLibrary.sort((a, b) => (a.pages < b.pages) ? 1 : -1); 
    }
    emptyLibrary();
    showLibrary(myLibrary);
}

// new book entry functions

function toggleForm() {
    newBookForm.classList.toggle("hidden");
}

function submitNewBook() {
    function createBook(a, b, c, d) {
        const newBook = new Book(a.value, b.value, Number(c.value),
            (d.checked) ? false : true);
        myLibrary.unshift(newBook);
    }
    toggleForm();
    createBook(...textValues, unreadValue);
    emptyLibrary();
    showLibrary(myLibrary);
    newBookForm.reset();

    return false;
}

// card deletion functions

function deleteCard(e) {
    function removeBook(button) {
        myLibrary.splice(button.parentElement.dataset.index, 1);
        button.parentElement.remove();
    }
    
    e.stopPropagation();
    if (confirm("Delete book permanently?")) {
        removeBook(this);
        emptyLibrary();
        showLibrary(myLibrary);
    }
}

function emptyLibrary() {
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
}

// temporary to adjust formatting

myLibrary = [theHobbit, greatGatsby, catch22, mobyDick, donQuixote, mockingbird];

showLibrary(myLibrary);

// failed form insertion

    // // create elements
    // const createBook = document.createElement("div");
    // const newTitle = document.createElement("input");
    // const newAuthor = document.createElement("input");
    // const newLength = document.createElement("input");
    // const newRead = document.createElement("div");
    // const bookSubmit = document.createElement("button");

    // const formArray = [newTitle, newAuthor, newLength, newRead, bookSubmit];

    // const newReadFalse = document.createElement("input");
    // const newReadFalseLabel = document.createElement("label");
    // const newReadTrue = document.createElement("input");
    // const newReadTrueLabel = document.createElement("label");

    // const readArray = [newReadFalse, newReadFalseLabel, newReadTrue, newReadTrueLabel];


    // // style elements and add placeholders

    // const styleInput = function(element, type, placeholder) {
    //     Object.assign(element, {
    //         type,
    //         placeholder,
    //     })
    // }
    // const styleRadio = function(element, value) {
    //     Object.assign(element, {
    //         type: "radio",
    //         value
    //     })
    // }

    // createBook.className = "inputForm";

    // styleInput(newTitle, "text", "Title");
    // styleInput(newAuthor, "text", "Author");
    // styleInput(newLength, "number", "300");

    // styleRadio(newReadFalse, "unread");
    // styleRadio(newReadTrue, "read");
    // newReadFalseLabel.textContent = "Unread";
    // newReadTrueLabel.textContent = "Read";
    // bookSubmit.textContent = "Submit";

    // readArray.forEach(radioItem => {
    //     newRead.appendChild(radioItem);
    // })
    
    // formArray.forEach(input => {
    //     createBook.appendChild(input);
    // })


    // body.insertBefore(createBook, cardContainer);
