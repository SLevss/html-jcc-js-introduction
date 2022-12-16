import { showError } from "./errorMessage.js";
export class PagesForm {
    #formElement;
    #pageFromInput;
    #pageToInputElement;
    #errorElement;
    #pageFrom;
    #pageTo;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#pageFromInput = document.getElementById(params.idPageFromInput);
        this.#pageToInputElement = document.getElementById(params.idPageToInput);
        this.#errorElement = document.getElementById(params.idError);
        this.onChangePageFrom();
        this.onChangePageTo();
    }
    
    addSubmitHandler(processPagesFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const pagesObj = { pageFrom: this.#pageFrom, pageTo: this.#pageTo };
            processPagesFun(pagesObj);
        })
    }
    onChangePageFrom() {
        this.#pageFromInput.addEventListener("change", (event) => {
            const value = +event.target.value;
            if (this.#pageTo && value >= this.#pageTo) {
                showErrorMessage(event.target, "Page 'from' must be less than Page 'to'",
                this.#errorElement);
            } else {
                this.#pageFrom = value;
            }
        })
        
    }
    onChangePageTo() {
        this.#pageToInputElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if (this.#pageFrom && value < this.#pageFrom) {
                showError(event.target, "Page 'To' must be greater than Page 'From'",
                    this.#errorElement);
            }
            this.#pageTo = value;
        })

    }

}