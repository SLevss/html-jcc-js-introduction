//-------------------------check Teudat Zehut----------------------------------
function checkTeudatZehut(teudatZehut) {

    if (teudatZehut.length != 9 || isNaN(teudatZehut)) return "ERROR";
    

    let arTeudatNumber = inArray(teudatZehut);

    let newarTeudatNumber = arTeudatNumber.map((digit, index) => {
        if (index % 2 !== 0) return sumDigits(digit * 2);
        else return sumDigits(digit);

    });

    let res = 0;
    let controlSumm = newarTeudatNumber.reduce((partSum, ind) => partSum + ind, 0);
    console.log("Checksum =", controlSumm);
    if (controlSumm % 10 == 0) {
        console.log("Teudat Zehut valid with number", teudatZehut);
    }
    if (controlSumm % 10 !== 0) {
        console.log("Teudat Zehut not valid with number", teudatZehut);
    }
}

function inArray(teudatNumber) {
    let arTeudatNumber = Array.from(teudatNumber);
    return arTeudatNumber;
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
console.log(checkTeudatZehut('123456789'));
console.log(checkTeudatZehut('34669800410'));
console.log(checkTeudatZehut('123456782a'));