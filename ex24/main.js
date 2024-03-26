// Define variable
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Test wit equalit and inequality
console.log("Is apple is equal to apple?");
console.log(apple == apple);
console.log("Is apple is not equal to apple?");
console.log(apple != apple);
// testwith using lower case function
console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//numirical Test involving equality and inequality
//greaterthan
console.log("\nIs10 is greater than 20?");
console.log(ten > 20);
console.log("\nIs10 is smallerthan20");
console.log(20 > 10);
// equality
console.log("\nIs 10 is equal 20?");
console.log(ten == 20);
//inequality
console.log("\nIsten is not equal to 20?");
console.log(ten != 20);
//greter than or equal to
console.log("\nIsten is greater than and is equal to 5?");
console.log(ten >= 5);
//less than or equal
console.log("\n Is 20 is less than or equal to 10?");
console.log(20 <= 10);
// Test with using "and" && "or" 
//using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (OR)
console.log("\n20 is greater than 50 OR20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 OR 20 is not 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in Array
console.log("\nIs orange include in my fruitsarray");
console.log(fruits.includes("orange"));
// Not include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));
