import { showError } from "./errorMessage.js";
export class AuthorForm {
    #formElement;
    #inputElements;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.getElementById(params.idInput);
       
    }
    addSubmitHandler(processAuthorFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const author = this.#inputElements.value;
            processAuthorFun(author);
        })

    }
}
