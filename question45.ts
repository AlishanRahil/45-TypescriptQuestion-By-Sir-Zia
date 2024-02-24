// Question No 45 //

// Make Fucntion Who Stores All Information About Car //
function aboutcar(...args) {
    let Carinfo = {
        company: "Toyota",
        modelname: "Altis",
        model : "2021",
        manufactur: 2021,
        color:"Red",
        Optionalfeature: "Sunroof"
    };
    // process additional keyword arguments // 
    for(let i = 0; i < args.length; i+= 2){
        let key = args[i];
        let value = args[i + 1]

        Carinfo[key] = value
    };
    return Carinfo;

}
// Calling A function OF Car Details
let cardetails = aboutcar();
console.log(cardetails)