module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numToWord = "";

    if (number < 20) {
        return (numToWord = ones[number]);
    }

    if (number < 100) {
        if (!(number % 10)) {
            number /= 10;
            return (numToWord = tens[number]);
        } else {
            let firstNum = Math.floor(number / 10);
            let secondNum = number % 10;
            return (numToWord = tens[firstNum] +' ' + ones[secondNum]);
        }
    }

    if (number < 1000) {
        let firstNum = Math.floor(number / 100);
        let secondNum = Math.floor((number - firstNum * 100) / 10);
        let thirdNum = (number - firstNum * 100) % 10;
        if (!(number % 100)) {
            return (numToWord = ones[firstNum] + " hundred");
        } else {
            let lastTwoNum = number - firstNum * 100;
            if (lastTwoNum < 20) {
                return (numToWord =
                    ones[firstNum] + " hundred " + ones[lastTwoNum]);
            } else if (!(lastTwoNum % 10)) {
                return (numToWord =
                    ones[firstNum] + " hundred " + tens[secondNum]);
            } else {
                return (numToWord =
                    ones[firstNum] +
                    " hundred " +
                    tens[secondNum] + ' ' +
                    ones[thirdNum]);
            }
        }
    }
};