// Question No 40 //

// Make A function //
function makealbum(artist, albumTitle, numberOfTracks) {
    // Create an album object with artist and album title
    let album = { artist: artist, albumTitle: albumTitle , numberOfTracks:numberOfTracks};
    // If numberOfTracks is provided, add it to the album object
    if(numberOfTracks !== undefined){
        album.numberOfTracks = numberOfTracks
    }   
    // Return The Album  Object //
    return album;
}
// Adding Names Of Artist And Albumtitle And Numberoftracks
let Albums = [
   makealbum("Arijit Singh","Sad Songs",12),
   makealbum("Sonu Nigam","Emotional Songs",8),
   makealbum("Atif Aslam","Romantic Songs",10)
]

// Printing To The Console.log For Output Result //
console.log("The 3 Artisit & Albumtitle Are ");
console.log(Albums);