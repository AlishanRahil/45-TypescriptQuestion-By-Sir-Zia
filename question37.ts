// Question No 37  //

// Large Shirts: 
function make_shirt1(size = "Large" , message = "I Love Typescript"){
      console.log(`Making A Desing  For The ${size}, T-Shirt ${message}`);
};
// Making a large shirt with the default message
make_shirt1();
// Making a medium shirt with the default message
make_shirt1("Medium");
// Making a shirt of any size with a different message
make_shirt1(`Small`,`Hello World`)