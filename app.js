function sumDigits(number) {
    if (number < 0)
        number = -number;

    let rem = 0;
    let sum = 0;
    while (number != 0) {
        rem = number % 10;

        sum = sum + rem;
        number = Math.floor(number / 10);

    }
    return sum;
}
console.log(sumDigits(123))