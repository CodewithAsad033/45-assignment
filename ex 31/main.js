var userName = ["Inam", "ALi", "Taha", "Admin", "Faisal"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty we need to find some users");
}
else {
}
// using ForEach Loop onArray
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
