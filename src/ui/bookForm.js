import { showError } from "./errorMessage.js";
export class BookForm {
    #formElement;
    #inputElements;
    #dateInputElement;
    #pagesInputElement;
    #dateErrorElement;
    #pagesErrorElement;
    #minPages;
    #maxPages;
    #minDate;
    #maxDate;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#pagesInputElement = document.getElementById(params.idPagesInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#pagesErrorElement = document.getElementById(params.idPagesError);
        this.#minPages = params.minPages;
        this.#maxPages = params.maxPages;
        this.#minDate = params.minDate;
        this.#maxDate = params.maxDate;

        this.onChange();
    }
    addSubmitHandler(processBook) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const book = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(book)
            processBook(book);
        })
    }
    onChange() {
        this.#dateInputElement.addEventListener("change", (event) => {
            this.validPublicationdate(event.target);
        })
        this.#pagesInputElement.addEventListener("change", (event) => {
            this.validPages(event.target);
        })
    }

    validPages(element) {
        const value = +element.value;
        if (value < this.#minPages || value > this.#maxPages) {
            const message = value < this.#minPages ? `pages must be ${this.#minPages} or greater`
                : `pages must be ${this.#maxPages} or less`;
                showError(element, message, this.#pagesErrorElement);
        }
    }
    validPublicationdate(element) {
        const value = new Date(element.value);
        // const value = +element.value.slice(0, 4);
        if (value < this.#minDate || value > this.#maxDate) {
            const message = value < this.#minDate ? `date must be ${this.#minDate} or greater` :
                `date must be ${this.#maxDate} or less`;
                showError(element, message, this.#dateErrorElement);

        }
    }

}
