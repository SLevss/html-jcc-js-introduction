//-------------------------check Teudat Zehut----------------------------------
function checkTeudatZehut(TeudatZehut) {

    if (TeudatZehut.length != 9 ) {
        return false;
    }
    if (isNaN(TeudatZehut)) {
        return false;
    }
   
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
        console.log("Teudat Zehut valid with number", TeudatZehut);
    }
    if (controlSumm % 10 !== 0) {
        console.log("Teudat Zehut not valid with number", TeudatZehut);
    }
}
console.log(checkTeudatZehut('123456782'));

function inArray(teudatNumber) {

    let arTeudatNumber = Array.from(teudatNumber);
    return arTeudatNumber;
}
function sumDigits(digit) {
    let sum = 0;
    while (digit != 0) {

        sum = sum + digit % 10;
        digit = Math.floor(digit / 10);

    }
    return sum;
}