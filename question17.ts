// Question 17 //

// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// print a message to inform 
console.log("I Just Found That Our Table Ownt Arrive For The Dinner ");


console.log("And Now I Have Space Only 2 persons In My New Table");;
//

// Store A names of Guests In Array //
let guests12 = ["Alishan" ,"Sir Rahil", "New Guest", " Sir Daniyal","Sir Zia","Subhan"];

// Adding While Loop For Remove Guests//
while (guests12.length > 2) {
    let removeguest = guests12.pop();
    console.log(`sorry ${removeguest} i can’t invite  you on to a dinner.`);
    
}

// Inform A message To those guests Who are still Invited //
   for(let guest of guests12){
    console.log(`${guest} You  Are Still Invited On A dinner`)
   }
   // Remove Last two Guests Fromm Array guests list //
   guests12.pop();
   guests12.pop();
   console.log(guests12);

