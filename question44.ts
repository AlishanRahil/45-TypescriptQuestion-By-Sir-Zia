// Question No 44 //

function makesandwich(...Items) {
    console.log("Making A sandwich According To The Items")
    for(let item of Items){
        console.log("- " + item);
    }
    console.log("Take Your Sandwich");
}
// Call the function with different numbers of arguments //
makesandwich("Chicken","Cheese","Cucumber" );
makesandwich("Meat" , "Salad","Eggs");
makesandwich("Vegetables","Boiled Eggs","Leetuce")