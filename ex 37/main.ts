// making a function
function make_shirt(size:string = "Large" ,printmessage:string ="I Love TypeScript"){
    console.log(`Creating a ${size} shirt with ${printmessage}print on shirt` )

}                   
//calling a function with by default  values
make_shirt();                              

// calling a function now with Medium size and default message
make_shirt("medium")

//calling function now with small size and also different message
make_shirt("small", "I love Javascript")