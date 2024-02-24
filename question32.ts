// Qustion 32 //

// Checking Usernames: //

// makeing a list of Current User's

let Curr_user = ["doc75" , "cash12","saiyra45", "subbu8","ksah4","alo4"];                                                                       // Makeing A New UserName List // 
let New_user = ["Ali25","Rahil32", "cash12","saiyra45","Samma12"];


// Convert current_users to lowercase                                                                     // Makeing A New UserName List // 
let Curr_user_lower = Curr_user.map(user => user.toLowerCase());

// Seeing A new User_List Who Has Ben Used User name // by loop //
for(let i = 0; i < New_user.length; i++){
    let New_user_lower = New_user[i].toLowerCase();
    if(Curr_user_lower.includes(New_user[i])){
        console.log(`The usrename ${New_user[i]} Is already in use You Will Have to Enter New User Name`);
    }else{
        console.log(` The User Name ${New_user[i]} is availble `);
    }
}