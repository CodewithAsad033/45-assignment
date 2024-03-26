//Creating Variable
let userName = ["Inam", "Taha","Ali", "Admin", "Faisal"];

// using ForEach Loop onArray
userName.forEach(oneuser => {
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser}, thank you for logging in again`)
    }
})