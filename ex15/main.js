var guestlist = ["Ali", "Inam", "Faisal", "Shan"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai Ahh skta");
guestlist.splice(0, 1, "Hasseb");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to dinner with me?")); });
