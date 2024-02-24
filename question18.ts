// Question No 18 //

// Seeing the World: Think of at least five places in the world you’d like to visit.//

// Store the locations in a array. Make sure the array is not in alphabetical order.//

let locations = ["eiffel tower", "louvre museum", "notre-dame dathedral", "shinjuku", "harajuku"];

// Print Into A its Origianl array //
console.log(" the orginal array = ",locations)


// withou Modifying the list //
let sortedLocations = [...locations].sort();``

// with Alphabatical order //
console.log("Sorted array = ",sortedLocations);

// Showing my Array IN Its Original order //
console.log(" the orginal still in its orginal  = ",locations);
  
// Create a copy of the array and sort it in reverse alphabetical order without modifying the original list
 let reversort = [...locations].sort().reverse();
 console.log("Reverseble Array",reversort);

 // Showing My Array Still In Its Original Order // 
 console.log("Original array",locations);

//  Reverse the order of your list. Print the array to show that its order has changed.
let reversort1 = [...locations].reverse()
 console.log("Order Has Changed",reversort1);

//  Reverse the order of your list again. Print the list to show it’s back to its original order.//
let reverseagain = locations;
console.log("Back to Original Order", reverseagain);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// Sorted Array //
locations.sort();

// print array //
console.log("Sorted Array",locations.sort());


// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let dotreverseble = [...locations].sort().reverse();


// print array //
console.log("Order Has Changed",dotreverseble);;
console.log("Question Is Complete Finnalyy Yayy");