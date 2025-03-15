// Immediately Invocked Function Expressions

// normal way
// const sum = () =>{
//     console.log("DB connected")
// }
// sum()

// IIFE way
// so this is the way you how immediately invocked the function by not callbacking the function but wraping the function in () as a block and also a () after end of function

// also known as named IIFE
(function sum(){
    console.log("DB connected")
})()

// so now question arises that what is IIfe?
// the answer behind the question is not that any function that immediately execute...
// simple answer is there is problem with global scope pollution and to remove that pollution or a variable the IIFE is used





// regular function
// (function sum(){
//     console.log("DB connected")
// }())

// (function sumOff(){
//     console.log("DB connected")
// }())

// here the first function doesn't know where to end the execution so it is necessary to use ; at last
// (function sum(){
//     console.log("DB connected")
// }());

// (function sumOff(){
//     console.log("DB connected to internet")
// }())


// IIFE in arrow function also known as Unnamed IIFE
// ( ()=>{
//     console.log("DB connected to system")
// } )()

// working in arrow of IIFE
// ( (a,b)=>{
//     console.log(`sum of ${a} and ${b} is ${a+b} `)
// } )(2,4)