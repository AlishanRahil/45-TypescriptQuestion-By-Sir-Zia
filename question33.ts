//             Question No 33   ///
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

function ordialnumber(n){
    if(n === 1){
        return "1st"
    }else if(n === 2 ){
        return  "2nd"
    }else if(n === 3){
        return "3rd"
    }else {
        return n + "th";
    }
}


// Stores Numbers 1to 9 In Array
let num = [1,2,3,4,5,6,7,8,9];
// using loop for print each number //
for(let i = 0; i < num.length; i++){
    console.log(ordialnumber(num[i]))
}
