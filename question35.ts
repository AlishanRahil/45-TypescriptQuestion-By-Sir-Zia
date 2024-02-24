// Question No 35 //
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list

let animals = ["Lion", "Cat","Zebra"];

// Using For Loop For Printing Each Animal Name //
console.log("The Three Common Animal's Are",animals)
for(let i = 0; i < animals.length; i++){
    if(animals[i] == "Lion"){
        console.log(`${animals[i]} Is A Very Very Dangerous Animal `)
    }else if(animals[i] == "Cat"){
        console.log(`${animals[i]}  Would Make Be A Great Pet`)
    }else if(animals[i] == "Zebra"){
        console.log(`${animals[i]}  is a great animal" `)
    }
};
console.log("Any Would Be Great Pet If We Treat Well ");