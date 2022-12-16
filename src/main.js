import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookForm.js";
import { BooksList } from "./ui/BooksList.js";
import { PagesForm } from "./ui/PagesForm.js";
import {AuthorForm } from "./ui/AuthorForm.js";

const listAllBooks = new BooksList("books-all");
const ListBooksByPages = new BooksList("books-pages");
const listBookByAuthor = new BooksList("books-author");

const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_DATE = new Date('1980-01-01');
const MAX_DATE = new Date();
const ACTIVE = "active";
const sectionsElement = document.querySelectorAll("section");
const library = new Library();

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input",
    idPagesInput: "pages_input", idDateError: "date_error", idPagesError: "pages_error", idAuthorInput: "author_input",
    minDate: MIN_DATE, maxDate: MAX_DATE, minPages: MIN_PAGES, maxPages: MAX_PAGES
})
bookForm.addSubmitHandler((book) => library.hireBook(book));

const paramsPagesForm = {
    idForm: "pages-form", idPageFromInput: "pageFrom",
    idPageToInput: "pageTo", idError: "pages_form_error"
}
const pagesForm = new PagesForm(paramsPagesForm);
pagesForm.addSubmitHandler((pagesObj) => {
    const from = pagesObj.pageFrom;
    const to = pagesObj.pageTo;
    const books = library.getBooksByPages(from, to);
    ListBooksByPages.showBooks(books);
})


function show(index) {
    sectionsElement.forEach(e => e.hidden = true)
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        listAllBooks.showBooks(books);
    }
    
    }
    const paramsAuthor = { idForm: "author-form", idInput: "author"};
    const authorForm = new AuthorForm(paramsAuthor);
    authorForm.addSubmitHandler((author) => {
        const books = library.getBooksAuthor(author);
        listBookByAuthor.showBooks(books);
    })

window.show = show;
