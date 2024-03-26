//Creating guest list array
let guestlist = ["Ali", "Inam", "Faisal", "Shan"];

//Making variable for those guest who can't come
let dontCome = guestlist[0];

//print the message
console.log(dontCome, "Nahi Ahh sakta");

//remove or add
guestlist.splice(0,1, "Hasseb");

//print the message
console.log("Good news !We have found a bigger dinner table");

//Adding a new guest at the starting of array
guestlist.unshift("Tahir");

//Adding a guest of the end of the array
guestlist.push("Saad");

//adding one guest at the middle of the arry
let MiddleIndex: number = Math.floor (guestlist.length /2);

//Adding a new guest to middle of the array
guestlist.splice(MiddleIndex, 0, "Babar");

//print the message updated list
console.log("updated list of our guest");

//sending a invitation message to our guest one by one with their names
guestlist.forEach(oneguest => console.log(`Salam${oneguest}, would ypu like to dinner with me?`));

// inform that only two guest can be invited for dinner
console.log("unfortunately, the new dinner tablewont arrive on time, so I can only invite Two Guests to dinner with me");

//using while-loop to remove guests from the arry until only two names remain
while(guestlist. length > 2){
    let removedGuest = guestlist.pop();
    console.log(`Sorry, ${removedGuest} I cant you to dinner`);


}

console.log("Invitation to the last 2 Guests");

guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));


//Removing Last two guest
guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist);


