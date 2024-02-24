// question 15 //


let guests1 = ["Sir Rahil", " Sir Daniyal","Sir Zia"];

// Stores An Statement For THat Guest Who Can't Make It//
let statement = "Cant Make It";
console.log(guests1[0],statement);

// New Guest I'm Inviting  //
guests1[0] = "Sir Sahil";

// Updated guests list //
console.log(" Updated guests list")
for(let i = 0 ; i < guests1.length; i++){
console.log(` ${guests1[i]}`)

}
// Second Set Of Invitation //

let secondset = "I Would really like to invite you"
console.log("Second Set Of Invitiation");

// Again Using For Loop For Updation Guest List To Inviting On Dinner //
for(let i = 0 ; i < guests1.length; i++){
    console.log(`${secondset} ${guests1[i]} on dinner`)}