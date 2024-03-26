// making a function
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printmessage, "print on shirt"));
}
//calling a function with by default  values
make_shirt();
// calling a function now with Medium size and default message
make_shirt("medium");
//calling function now with small size and also different message
make_shirt("small", "I love Javascript");
