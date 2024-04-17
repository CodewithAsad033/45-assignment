// define the function to show magicians names
function show_magicians (magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//Function to make magicians great through .map()it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}
//Define an array of magicians names
let magicians_names=["HarryPoter","Asad","Taha"];

//call make great function to modified magicians names
let great_magicians = make_great(magicians_names);

//Call show-magicians that show modified list of magicians
show_magicians(great_magicians)
