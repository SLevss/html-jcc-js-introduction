import { Library } from "./data/library.js";
const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_YEAR = 1980;
const MAX_YEAR = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";

const pagesErrorElement = document.getElementById("pages_error");
const dateErrorElement = document.getElementById("date_error");
const pagesFormErrorElement = document.getElementById("pages_form_error");
const sectionsElement = document.querySelectorAll("section");

const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const booksAuthorListElement = document.getElementById("books-author");

const library = new Library();

function show(index) {
    sectionsElement.forEach(e => e.hidden = true)
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }else if(index == 3){
        const books = library.getBooksAuthor(author);
        booksListElement.innerHTML = getBookItems(books);  

    }
}
function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
    library.hireBook(book);

}
function onChange(event) {
    if (event.target.name == "pages") {
        validPages(event.target)
    } else if (event.target.name == "publicationDate") {
        validPublicationdate(event.target);
    }
}
function validPages(element) {
    const value = +element.value;
    if (value < MIN_PAGES || value > MAX_PAGES) {
        const message = value < MIN_PAGES ? `pages must be ${MIN_PAGES} or greater`
            : `pages must be ${MAX_PAGES} or less`;
        showError(element, message, pagesErrorElement);
    }
}
function validPublicationdate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > MAX_YEAR) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${MAX_YEAR} or less`;
        showError(element, message, dateErrorElement) ;    
    }
}

function showError(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = '';
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}
function getMaxYear() {
    return new Date().getFullYear();
}
let pagesFrom = 0;
let pagesTo = 0;
function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPages(pagesFrom, pagesTo);
    booksPagesListElement.innerHTML = getBookItems(books);

}
function onSubmitAuthor(event) {
    event.preventDefault();
    const books = library.getBooksAuthor(author);
    booksAuthorListElement.innerHTML = getBookItems(books);

}
function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pagesFrom && value >= pagesTo) {
        showError(event.target, "Pages 'from' must be less than Pages 'to'",
            salaryFormErrorElement);
    } else {
        pagesFrom = value;
    }
}
function onChangePagesTo(event) {
    const value = +event.target.value;
    if (pagesFrom && value < pagesFrom) {
        showError(event.target, "Pages 'To' must be greater than Pages 'From'",
            pagesFormErrorElement);
    }
    pagesTo = value;
}

function getBookItems(books) {
    return books.map(e =>
        `<li class="books-item"><div class="books-item-container">
                 <p class="books-item">Author: ${e.author} </p>
                 <p class="books-item">Title: ${e.title} </p>
                 <p class="books-item">Genre: ${e.genre}</p>
                 <p class="books-item">Publicationdate: ${e.publicationDate}</p>
                 <p class="books-item">Pages: ${e.pages}</p></li>`).join('');
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.show = show;
window.onChangePagesTo = onChangePagesTo;
window.onChangePagesFrom = onChangePagesFrom
window.onSubmitPages = onSubmitPages
window.onSubmitAuthor=onSubmitAuthor;