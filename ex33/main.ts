// creating a Array
let numbers = [1 ,2 ,3 ,4, 5, 6, 7 ,8 ,9 ];

// using for loop
for(let onenumber of numbers){
    let oridinalEnding : string;

    if(onenumber === 1){
        oridinalEnding = "st"

    } 
else if(onenumber === 2){
    oridinalEnding = "nd"

}
else if(onenumber === 3){
    oridinalEnding = "rd"

}
else{
    oridinalEnding= "th"
}
console.log(`${onenumber}${oridinalEnding}`);
}



