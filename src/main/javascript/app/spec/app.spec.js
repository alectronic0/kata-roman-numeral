const convertNumberToRomanNumeral = require('../index');

describe("convertNumberToRomanNumerals", () => {

    describe("when i input", () => {

        describe("a valid parameter", () => {

            it.each`
                arg   | result
                ${1}  | ${"I"}
                ${2}  | ${"II"}
                ${3}  | ${"III"}
                ${4}  | ${"IV"}
                ${5}  | ${"V"}
                ${6}  | ${"VI"}
                ${7}  | ${"VII"}
                ${8}  | ${"VIII"}
                ${9}  | ${"IX"}
                ${10} | ${"X"}
              `('should return $result when input $arg', ({arg, result}) => {
                expect(convertNumberToRomanNumeral(arg)).toBe(result);
            });
        });

        describe("an invalid parameter", () => {

            it("should throw an error when input is string", () => {
                expect(() => {
                    convertNumberToRomanNumeral("test")
                }).toThrow("Not a number");
            });

            it("should throw an error when input is null", () => {
                expect(() => {
                    convertNumberToRomanNumeral(null)
                }).toThrow("Not a number");
            });

        });
    });
});
