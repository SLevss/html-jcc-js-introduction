export class BooksList{
    #listElement;
    constructor(idList){
this.#listElement=document.getElementById(idList);
    }
showBooks(books){
    this.#listElement.innerHTML=getBookItems(books);
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