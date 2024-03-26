//Making a Array of countries and Print its Original order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argetina"];
console.log("Original order:", countriesToVisit);

//Print the in alphabetical order with out modifying the order
console.log( "Alphabetical order:",[...countriesToVisit].sort());

//Show that the Array is still in its original order
console.log("Still in original order:", countriesToVisit);

//Print the Array in Reversed order with out modifying the Actual Array List
console.log("Reverse order:", [...countriesToVisit].reverse());

//Show that the Array is still in its original order
console.log("Still in original order:", countriesToVisit);

//we have changed the original Array now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the arry to show that it's back to its original order
console.log("Back to original order:", countriesToVisit.reverse());

//Print the array to show that it's order has been changedin alphabetical order now,
console.log("sort in alphabetical order:", countriesToVisit.sort());

//we have changed again the original Array order now in reverse order again
console.log("Original Array Reversed again:", countriesToVisit.reverse());


