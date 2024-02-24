// Question No 42 //
// Great Magicians: // 

// Mak A function Called Make Great //
function make_great(magicians) {
    // Loop through each magician's name in the array
    for(let i = 0; i < magicians.length; i++) {
        // Add the phrase "the Great" to each magician's name
        magicians[i] = "the Great " + magicians[i];
    }
}
// Write Magicians Name //
let magicians = [
    "David Copperfield",
    'Dynamo',
    'Harry Houdini',    
    'Criss Angel',      
    'Shin Lim'
  ];
  // indicating That Modified List HAS Been Modified
console.log("The List Has Modifyed")

// Making New Function //
function show_magicians(magicians) {
   for(let i = 0; i < magicians.length; i++){
    console.log(magicians[i]);
   }
}
// Call The Makegreat Function To Modify  Magicians .//
make_great(magicians);
// Print Show Magicians //
show_magicians(magicians);
// Call the show_magicians function to display the modified list of magician names
console.log("The Question Is Completed !")