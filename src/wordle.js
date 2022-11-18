const words = [["Types of JavaScript Operators", "arithmetic"], ["JavaScript Data Types", "strings"],
["JavaScript Objects", "methods"], ["JavaScript - HTML DOM Methods", "innerHTML "]];

let wordField;
let seachWordsArray = [];
let seachWordsArrayLength = 0;
let index = 0;

const sectionElement = document.querySelector(".word-guess");
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialsElement = document.querySelector(".guess-trials");
const wordTrElement = document.querySelector(".words-trials");
const gameOverElement = document.querySelector(".game-over-message");
const MovElement = document.querySelector(".guess-moving");

let flGameOver = false;
let trials = 0;

function getDivsElements() {
    index = Math.floor(Math.random() * words.length);
    console.log('word - ', words[index][1]);
    wordField = words[index][1];
    seachWordsArray = Array.from(wordField);
    let res = seachWordsArray.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}

function showTrialsMessage(trials) {
    trialsElement.innerHTML = `remained ${trials} guess trials`;
}
function startGame() {
    if (flGameOver) {
        sectionElement.innerHTML = getDivsElements();
        flGameOver = false;
    }
    seachWordsArrayLength = 0;
    flGameOver = false;
    
    MovElement.innerHTML = `guess ${words[index][0]} `;
}
function onChange(event) {
    const wordGuess = event.target.value.toLowerCase();
    event.target.value = '';
    if (flGameOver) {
        alert("game is over");
        return;
    }
    trials++;
    showTrialsMessage(trials, wordGuess);
    const wordArray = Array.from(wordGuess);
    let color = seachWordsArray.map((len) => {
        return wordArray.includes(len) ? 'white' : 'black';
    })
    color.forEach((colorl, index) => {
        if (colorl === 'white') {
            if (letterElements[index].style.background !== 'white') {
                seachWordsArrayLength++;
                letterElements[index].style.background = colorl;
            }
        }
    });
    if (seachWordsArrayLength === seachWordsArray.length) {
        endGame(true);
    }
}
function endGame(isSuccess) {
    if (isSuccess) {
        gameOverElement.innerHTML = "Congratulations you are winner";
        gameOverElement.style.color = "green";
        MovElement.innerHTML = '';
    }
    trialsElement.innerHTML = '';
    wordTrElement.innerHTML = '';

    trialsElement.innerHTML = '';
    flGameOver = true;
    index = 0;
}
startGame()