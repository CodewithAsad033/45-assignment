//define the make album function
function make_album(artist_name:string, album_title:string, tracks?: number){
    let album: {artist: string, title:string, tracks?:number}= {
        artist:artist_name,
        title:album_title,
    };

    if(tracks !== undefined){
        album.tracks=tracks;

    }
    return album;

}
//calling three  function and creating three vaiable with different values
let album1 = make_album("Asad","album_title no 1")
let album2 =make_album("Taha","album_title2")

// calling a make_album functin with the parameter
let album3 =make_album("Ali","album3", 10)


// print the value
console.log(album1);
console.log(album2);
console.log(album3);
