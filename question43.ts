// Question 43 // 

// Make A function That Have Returns New Magicians//

function make_greats(Magicians) {
   let greatmagcians = magicianss.map(magicianss => magicianss + "The Great")
   return greatmagcians;
}
let magicianss = [
    "David Copperfield",
    'Dynamo',
    'Harry Houdini',    
    'Criss Angel',      
    'Shin Lim'
  ];
  // Call The Function Makegreat Function //
  let greatmagcians = make_greats(magicianss);

  // Call The Original Magician First //
  console.log("Original Magicians")
  console.log(magicianss);

  // Calling Great Magicians //
  console.log("great Magicians");
  console.log(greatmagcians);