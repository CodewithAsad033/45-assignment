var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of countries and Print its Original order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argetina"];
console.log("Original order:", countriesToVisit);
//Print the in alphabetical order with out modifying the order
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
//Show that the Array is still in its original order
console.log("Still in original order:", countriesToVisit);
//Print the Array in Reversed order with out modifying the Actual Array List
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
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
