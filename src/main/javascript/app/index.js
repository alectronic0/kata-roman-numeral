const numeralMap = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC"
};

const numeralList = [
    {arabic: 1000, roman:"M"},
    {arabic: 500, roman:"D"},
    {arabic: 100, roman:"C"},
    {arabic: 50, roman:"L"},
    {arabic: 10, roman:"X"},
    {arabic: 5, roman:"V"},
    {arabic: 1, roman:"I"}
];


module.exports = (args) => {
    if (isNaN(args) || args === null) {
        throw "Not a number";
    }

    return convertToRoman(args, 0);
};

function convertToRoman(decimalNumber, mappedNumber){
    const conversion = numeralMap[decimalNumber];

    // if (conversion !== undefined) return conversion;

    // if there's a roman numeral for the number we're on, use it
    // if there's a difference between the roman numeral we're on
    // that is equal to another roman numeral, place it on the left
    // X = 10
    // 9 = one less than tem
    // we have a roman numeral for one and a roman numeral for 10
    // 9 = IX
    // 9 = 10 - 1
    // 1 = I in roman numerals

    let romanString = "";

    if (mappedNumber < numeralList.length) {
        const whole = decimalNumber / numeralList[mappedNumber].arabic;
        const remainder = decimalNumber % numeralList[mappedNumber].arabic;

        romanString = romanString + repeatRomanString(whole,numeralList[mappedNumber].roman);

        if (0 < remainder) {
            const newMappedNumber = mappedNumber+1;
            romanString = romanString + convertToRoman(remainder, newMappedNumber);
        }
    }

    return romanString;
}

const repeatRomanString = (numberOfTimes, romanNumeral) => {
    return ((numberOfTimes > 0) ? romanNumeral.repeat(numberOfTimes) : "");
}
