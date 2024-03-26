// creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var onenumber = numbers_1[_i];
    var oridinalEnding = void 0;
    if (onenumber === 1) {
        oridinalEnding = "st";
    }
    else if (onenumber === 2) {
        oridinalEnding = "nd";
    }
    else if (onenumber === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log("".concat(onenumber).concat(oridinalEnding));
}
