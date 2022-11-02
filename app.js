
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    if (base > 36 || base < 2) {
        console.log("ERROR");
    }
    else {
        do {
            let digit = number % base;
            if (digit > 9) {
                digit = String.fromCharCode(55 + digit);
            }

            res = digit + res;
            number = Math.trunc(number / base);
        } while (number != 0);

    }


    return res;
}
console.log(fromNumberToString(900550, 36));
console.log(fromNumberToString(46016237, 36));
console.log(fromNumberToString(11483, 2));


//************************************************************************ */

function fromStringToNumber(string, base) {

    if (isNaN(base)) {
        console.log("ERROR");
    }
    if (base > Math.trunc(base)) {
        console.log("ERROR");
    }
    if (base > 36 || base < 2) {
        console.log("ERROR");
    }
    if (typeof string != 'string') {
        console.log("ERROR");
    }    
        let result = 0;
        // string.toLowerCase();
        for (let i = 0; i < string.length; i++) {

            let digit = string.charCodeAt(i);
            if (digit >= 48 && digit <= 57) {

                digit -= 48;
            } else if (digit >= 97 && digit <= 122) {

                digit -= 87;
            } else {
                return 'error';
            }

            result = result * base + digit;
        }
        return result;
    }



    console.log(fromStringToNumber('java', 36));  // => 900550
    console.log(fromStringToNumber('react', 36));  // => 46016237
    console.log(fromStringToNumber('10110011011011', 2));  // => 11483
    
    //---------------isBaseValid------------------------------
