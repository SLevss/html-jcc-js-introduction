export class Library {
    constructor() {
        this.books = [];
    }
    hireBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getBooksByPages(pagesFrom, pagesTo) {
        return this.books.filter(e => e.pages >= pagesFrom && e.pages < pagesTo);
    }
}