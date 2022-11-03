//----------------------------check teudat zehut---------------------------------------
function checkTeudatZehut() {
    let teudatNumber = generateRandomTeudatZehut();
    console.log(teudatNumber);

    if (teudatNumber.length != 9 || isNaN(teudatNumber)) return false;

    let arTeudatNumber = inArray(teudatNumber);
    console.log(arTeudatNumber);
    let newarTeudatNumber = arTeudatNumber.map((digit, index) => {
        if (digit % 2 == 0) return digit * 2;

        else return digit;

    });

    console.log(newarTeudatNumber);
    console.log(newarTeudatNumber.reduce(function (res, digit) {
        return res + cur
    }, ""));

}


function inArray(teudatNumber) {
    teudatNumber = String(teudatNumber).trim();
    let arTeudatNumber = Array.from(teudatNumber);
    return arTeudatNumber;
}
//-------------------------------------generate number----------------------------------------
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




