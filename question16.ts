// Question 16 //
let guests11 = ["Sir Rahil", " Sir Daniyal","Sir Zia"];

console.log("New Set Of Invitiaon");
console.log("I Just Found A bigger Table");
console.log("So Now I'M Inviting More People At My Dinner")
// Add A guest In The Beggining //
guests11.unshift("Alishan");

// Add A Guest In The Middle // 
guests11.splice(2,0 ,'Mariyam Nawaz')

// Add A guest In The End Of The List //
guests11.push("Subhan");

// Print a  Message To  Each Guest By Using For Loop //
for(let i = 0 ; i < guests11.length; i++){
    console.log(`I would Like To Invite ${guests11[i]} on dinner`)
    }
