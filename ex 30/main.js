//Creating Variable
var userName = ["Inam", "Taha", "Ali", "Admin", "Faisal"];
// using ForEach Loop onArray
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
