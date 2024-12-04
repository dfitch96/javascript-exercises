const palindromes = function (text) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedText = text
    .toLowerCase()
    .split('')
    .filter(ch => alphanumerical.includes(ch))
    .join('');

    const reversedText = cleanedText.split('').reverse().join('');

    return cleanedText === reversedText;

};

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
