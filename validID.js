//-------------------------check Teudat Zehut----------------------------------
const anyDigits = '012345678';
function checkTeudatZehut(teudatZehut) {
    if (teudatZehut.length != anyDigits.length || isNaN(+teudatZehut)) {
        console.log("Teudat Zehut = ", teudatZehut, '= ', false);
        return false;
    }

    let newarTeudatNumber = Array.from(teudatZehut).map((digit, index) => {
        return (index % 2 !== 0) ? sumDigits(digit * 2) : sumDigits(digit);
    });

    let controlSumm = newarTeudatNumber.reduce((partSum, ind) => partSum + ind, 0);
    console.log("Checksum =", controlSumm);
    if (controlSumm % 10 == 0) {
        console.log("Teudat Zehut valid with number", teudatZehut);
        return true;
    }else{
        return false;
    }
   
}


function sumDigits(digit) {

    let sum = 0;
    while (digit != 0) {

        sum = sum + (digit % 10);
        digit = Math.floor(digit / 10);

    }
    return sum;
}
console.log(checkTeudatZehut('123456782'));
console.log(checkTeudatZehut('346698004'));
console.log(checkTeudatZehut('34669800410'));
console.log(checkTeudatZehut('123456782a'));
console.log(checkTeudatZehut(generateRandomTeudatZehut()));

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
    
  

function getInc(number, i) {

    let inc = Number(number) * ((i % 2) + 1);
    return (inc > 9) ? inc -= 9 : inc;

}