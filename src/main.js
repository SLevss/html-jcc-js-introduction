import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookForm.js";
import { showError } from "./ui/errorMessage.js";
const authorInputElement = document.querySelectorAll(".author-form-class [name]");
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_DATE = new Date('1980-01-01');
const MAX_DATE = new Date();


const pagesFormErrorElement = document.getElementById("pages_form_error");
const sectionsElement = document.querySelectorAll("section");

const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const booksAuthorListElement = document.getElementById("books-author");

const library = new Library();

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input",
    idPagesInput: "pages_input", idDateError: "date_error", idPagesError: "pages_error",idAuthorInput:"author_input",
    minDate: MIN_DATE, maxDate: MAX_DATE, minPages: MIN_PAGES, maxPages: MAX_PAGES
})
bookForm.addSubmitHandler((book) => library.hireBook(book))


let pagesFrom = 0;
let pagesTo = 0;
function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPages(pagesFrom, pagesTo);
    booksPagesListElement.innerHTML = getBookItems(books);
}
function onSubmitAuthor(event) {
    event.preventDefault();
    const author = Array.from(authorInputElement)[0].value;
    const books = library.getBooksAuthor(author);
    booksAuthorListElement.innerHTML = getBookItems(books);

}
function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pagesFrom && value >= pagesTo) {
        showError(event.target, "Pages 'from' must be less than Pages 'to'",
            bookFormErrorElement);
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
function show(index) {
    sectionsElement.forEach(e => e.hidden = true)
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
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


window.show = show;
window.onChangePagesTo = onChangePagesTo;
window.onChangePagesFrom = onChangePagesFrom
window.onSubmitPages = onSubmitPages
window.onSubmitAuthor = onSubmitAuthor;