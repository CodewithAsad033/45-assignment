// creating current user
let currentUser = ["Tahla", "Usman" ,"shariq", "Turabi", "Imad"];

// creating new user
let Newuser = ["Taha", "Saad","Shariq","Turabi","Imad"];

//loop throught new user to check for user name avaibility
 
Newuser.forEach(Newoneuser => {
    //Making a condition for user name already exist and in ourcondition variable
    let our_condition =currentUser.some(currentoneuser => currentoneuser.toLowerCase() === Newoneuser.toLowerCase())
    if(our_condition){
        //Print message using "if else"
        console.log(`Sorry ${Newoneuser}is already taken`)

    }else{
           console.log(`this username ${Newoneuser} is availaible`)       
    }
})
    






