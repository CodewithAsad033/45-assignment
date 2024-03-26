//Creating guest list array
var guestlist = ["Ali", "Inam", "Faisal", "Shan"];
//Making variable for those guest who can't come
var dontCome = guestlist[0];
//print the message
console.log(dontCome, "Nahi Ahh sakta");
//remove or add
guestlist.splice(0, 1, "Hasseb");
//print the message
console.log("Good news !We have found a bigger dinner table");
//Adding a new guest at the starting of array
guestlist.unshift("Tahir");
//Adding a guest of the end of the array
guestlist.push("Saad");
//adding one guest at the middle of the arry
var MiddleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle of the array
guestlist.splice(MiddleIndex, 0, "Babar");
//print the message updated list
console.log("updated list of our guest");
//sending a invitation message to our guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam".concat(oneguest, ", would ypu like to dinner with me?")); });
