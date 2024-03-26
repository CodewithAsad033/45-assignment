let guestlist = ["Ali", "Inam", "Faisal", "Shan"];

let dontCome = guestlist[0];

console.log(dontCome, "Nai Ahh skta");

guestlist.splice(0,1, "Hasseb");

guestlist.forEach(guest => console.log(`Salam ${guest},would you like to dinner with me?`));