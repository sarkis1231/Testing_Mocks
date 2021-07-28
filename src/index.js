const sum = (x, y) => x + y;
const reverseString = (str) => {
    reversedStr = ""
    for (let char of str) {
        reversedStr = char + reversedStr;
    }

    return reversedStr;

}

exports.sum = sum;
exports.reverseString = reverseString;
