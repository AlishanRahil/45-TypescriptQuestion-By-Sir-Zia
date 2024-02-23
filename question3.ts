// Question No 2//

let name23 = "Alishan Rahil "
console.log("Original",name23);

console.log("ToUpper",name23.toUpperCase());
console.log("ToLower",name23.toLowerCase());
console.log("ToTitleCase",Totitlecase(name23))

// making titleCase //
function Totitlecase(str){
   return str.replace("/\b\w/g", function(char){
      return char.toUpperCase()
   })

};


