// creating current user
var currentUser = ["Tahla", "Usman", "shariq", "Turabi", "Imad"];
// creating new user
var Newuser = ["Taha", "Saad", "Shariq", "Turabi", "Imad"];
//loop throught new user to check for user name avaibility
Newuser.forEach(function (Newoneuser) {
    //Making a condition for user name already exist and in ourcondition variable
    var our_condition = currentUser.some(function (currentoneuser) { return currentoneuser.toLowerCase() === Newoneuser.toLowerCase(); });
    if (our_condition) {
        //Print message using "if else"
        console.log("Sorry ".concat(Newoneuser, "is already taken"));
    }
    else {
        console.log("this username ".concat(Newoneuser, " is availaible"));
    }
});
