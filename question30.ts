// Question No 30 //

// Making Array Of Admin & User's //
let Admuser = ["Admin", "Ali,User","Ayan,User","Subhan,User","Rafay,User"];

for(let i = 0 ; i < Admuser.length; i++){
    if(Admuser[i] == "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
    console.log(`Hello ${Admuser[i]}, Thank You For Logging Again`)
}}