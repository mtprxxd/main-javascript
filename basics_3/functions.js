// function basicStructure(a,b){
//     console.log(a+b);
// }
// basicStructure(5,6);-- (callback arguments)



//when a new variable is declared called result 
// function basicStructure(a,b){
//     console.log(a+b);
// }
// const result = basicStructure(5,6);
// console.log("Result: ",result);




// so this is how we avoid the undefined result by removing the console from inside the function block 
// function basicStructure(a,b){
//     let result = a+b;
//     return result;
//     // output will not show any further after return a value
// }
// const result = basicStructure(5,6);
// console.log("Result: ",result);



// efficient way to return the values

// function basicStructure(a,b){
//     return a+b;
// }
// const result = basicStructure(5,6);
// console.log("Result: ",result);


// --------------------------------------------------


// function userLoggedInText(username){
//     return `${username} just logged in`
// }

// const showResult =userLoggedInText("KR$NA");
// console.log(showResult);
// if we will not pass the arguments then Undefined will be return



// introducing the if-else statement

// function userLoggedInText(username){

// at first we declared or fix the value or name or parameter
// function userLoggedInText(username = "KR$NA"){
//     if (username===undefined) {
//         return
//     }
//     else 
//     return `${username} just logged in`
// }

// // const showResult =userLoggedInText("KR$NA");
// // console.log(showResult);
// console.log(userLoggedInText());




// ---------------Rest Operator------------------------
// using the rest operator (...c)...it will return an array
// function calculatedBikePrice(a,b,...c){
//     return c;
// }
// console.log(calculatedBikePrice(10,20,30,40,50));



// --------------Objects in function-------------------
const functionObject = {
    name: "manmeet",
    age: 23
}

function functionObjectBlock (anyObject){
    // console.log(`My name is ${anyObject.name} and age is ${anyObject.age}`);
    
}
// functionObjectBlock(functionObject);
functionObjectBlock({
    name: "manmeet",
    age: 23
});

// ---------Arrays in functions------------------

const Array = [20,30,40,50];

function arrayFunction(getArray){
    console.log(`the first element is ${getArray[0]} and last element is ${getArray[3]}`);
    
}
// arrayFunction(Array)
arrayFunction([20,30,40,50])