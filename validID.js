//-------------------------check Teudat Zehut----------------------------------
const anyDigits = '012345678';
function checkTeudatZehut(teudatZehut) {
    if (teudatZehut.length != anyDigits.length || isNaN(+teudatZehut)) {
        console.log("Teudat Zehut = ", teudatZehut, '= ', false);
        return false;
    }
    let newarTeudatNumber = inArray(teudatZehut).map((digit, index) => {
        return (index % 2 !== 0) ? sumDigits(digit * 2) : sumDigits(digit);
    });

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
