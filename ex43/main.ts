// define the function to show magicians names
function show_magicians (magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//Function to make magicians great through .map()it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}
//Define an array of magicians names
let magicians_names=["HarryPoter","Asad","Taha"]

// Making a copy of original array through .slice() function
let copy_magician_names = magicians_names.slice()

// Modify the copied array to include "The great"with thier names
let copy_great_names = make_great(copy_magician_names);

//show both arrays Original and Copied

//Original
show_magicians(magicians_names);

//copied
show_magicians(copy_great_names)