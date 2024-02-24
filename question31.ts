// Question No 31 //

let Users  = ["Admin", "Ali,User","Ayan,User","Subhan,User"]; //Empty array of users
if(Users.length > 0){
    for(let i = 0; i < Users.length; i++){
        if(Users[i] === "Admin") {
        console.log("Hello Admin Would You Like To Check Some Status Report?")
    } else{
        console.log(`Hello ${Users[i]} Thank you For Logging Again`); // If The User List Is Empty Then This will Print Otherwise This Will Not Print 

    } 
}

}else {
    console.log("We need to find some users!");
}