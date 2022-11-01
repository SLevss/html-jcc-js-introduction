
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    if (base > 36 || base < 2) {
        console.log("ERROR");
    }
    else {
        do {
            let digit = number % base;
            res += digit.toString(base);
            number = Math.trunc(number / base);
        } while (number != 0);

    }


    return res.split("").reverse().join("");
}
console.log(fromNumberToString(900550, 36));
console.log(fromNumberToString(46016237, 36));
console.log(fromNumberToString(11483, 2));


//************************************************************************ */

function fromStringToNumber(string, base) {
   
    
    if (base > 36 || base < 2) {
        console.log("ERROR");
    }
    else if (typeof string == "number") {
        console.log("ERROR");
    }
    else {
        res = parseInt(string, base);
        if (isNaN(res)) {
            return String.fromCharCode(base);
        }
        else {
            return res;
        }
    }
}

console.log(fromStringToNumber("JAVA", 36));
console.log(fromStringToNumber("react’", 36));
console.log(fromStringToNumber("10110011011011", 2));
