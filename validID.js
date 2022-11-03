//-------------------------check Teudat Zehut----------------------------------
function checkTeudatZehut(TeudatZehut) {

    if (TeudatZehut.length != 9 || isNaN(TeudatZehut)) return false;
    let arTeudatNumber = inArray(TeudatZehut);
    console.log(arTeudatNumber);
    let newarTeudatNumber = arTeudatNumber.map((digit, index) => {
        if (index % 2 !== 0) return sumDigits(digit * 2);
        else return sumDigits(digit);

    });
    console.log(newarTeudatNumber);
    let res = 0;
    const controlSumm = newarTeudatNumber.reduce((partSum, x) => partSum + x, 0);
    console.log("Checksum =", controlSumm);
    if (controlSumm % 10 == 0) {
        return console.log("Teudat Zehut valid with number", TeudatZehut);
    }
    if (controlSumm % 10 !== 0) {
        return console.log("Teudat Zehut not valid with number", TeudatZehut);
    }
}
console.log(checkTeudatZehut('123456782'));

function inArray(teudatNumber) {

    let arTeudatNumber = Array.from(teudatNumber);
    return arTeudatNumber;
}
function sumDigits(digit) {
    if (digit < 0)
        digit = -digit;

    let rem = 0;
    let sum = 0;
    while (digit != 0) {
        rem = digit % 10;

        sum = sum + rem;
        digit = Math.floor(digit / 10);

    }
    return sum;
}

//---------------------------------------- generate Random Teudat Zehut---------------------------------
function generateRandomTeudatZehut() {
    let teudatNumber = "", number, counter = 0;

    for (let i = 0; i < 8; i++) {

        let firstElem = (i < 2) ? 0 : 2;
        let lastElem = (i > 2) ? 3 : 9;
        number = Math.round(Math.random() * (lastElem - firstElem));
        teudatNumber += number;
        counter += getInc(number, i);
    }

    return teudatNumber + (10 - (counter % 10));
}


console.log(generateRandomTeudatZehut());

function getInc(number, i) {

    let inc = Number(number) * ((i % 2) + 1);
    return (inc > 9) ? inc -= 9 : inc;

}
