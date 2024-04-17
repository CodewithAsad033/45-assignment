//define a function with a rest parameter that accept items arguments representing our sandwich
function makesandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n")

    items.forEach(singleitem => console.log(singleitem));

    console.log("\nNow Enjoy Sandwich");

}

//Call the function 3times with 3 different number of arguments
makesandwich("chicken","Cheese","Mayo","Egg");

makesandwich("bread","butter");

makesandwich("bread","butter","mayo","egg","cheese","chicken","lettuce","tomato");