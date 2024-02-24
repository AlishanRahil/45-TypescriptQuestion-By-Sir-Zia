// // Question No 41 //
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Making An Array Of the magicians_Names ;

let Magicians = ["David Copperfield","Dynamo","Harry Houdini","Criss Angel","Shin Lim"];

// COnsole.log Priniting //
console.log("/ These Are The Magician/")
// Passing A Array To Function //
function show_magicians1(magicians) {
   for(let i = 0; i < magicians.length; i++){
    console.log(magicians[i]);
   }
}

// Calling The Function With Magicians Array ;
show_magicians1(Magicians);//

console.log("The Question Is Completed ");