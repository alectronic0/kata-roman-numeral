module.exports = (args) => {
    if (isNaN(args) || args === null) {
        throw "Not a number";
    }

    return convertToRoman(args);
};

const romanNumeralArray = [
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM"]
];

function convertToRoman(decimalNumber){
    let s = [];
    for(let index in romanNumeralArray){
        const x = divmod(decimalNumber,10);
        decimalNumber = x.div;
        const remainder = x.rem;
        let numeral = romanNumeralArray[index][remainder];
        s.unshift([numeral],s);
    }

    return s.join('');
}

const divmod = (x, y) => {
    const div = Math.trunc(x / y);
    const rem = x % y;
    return {div, rem};
}



