const word = "table"
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess");
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let guessCount = 6;


function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value = '';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = index == i ? 'green' : 'yellow';
            }
            return res;
        })
        colors.forEach((c, i) =>
            letterElements[i].style.color = c)
    }

    if (wordGuess === word) {
        lastResult.textContent = 'Congratulations! You guessed the word!';
        lastResult.style.backgroundColor = 'green';
        guessCount=0;
        return;
    } else if (guessCount === 0) {
        lastResult.textContent = '!!!Your attempts to guess are over!!!';
        lastResult.style.backgroundColor = 'red';
        guessCount=0;
        return;
    } else {

        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        guesses.textContent = (`Do you have any attempts left: ${guessCount-1}`);
    }

    guessCount--;

}
