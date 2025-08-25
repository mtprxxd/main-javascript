// for of

const arr1 = ['a','b','c','d','e']

for (const array of arr1) {
    // console.log(array);
    
}

const greet = "Hello World!"

for (const greeting of greet) {
    // console.log(`For Each element ${greeting}`);
    
}



// ------------Map in Array------------------------
// basically map is used to creates a new array from calling a function for every array element 

const map = new Map()
map.set("Bollywood", "India")
map.set("Hollywood", "USA")
  

// this will return a new array with separate elements
for (const mapping of map) {
    // console.log(mapping);
    
}

// this will return the value of array also destructure an array
for (const [key,value] of map) {
    // console.log(key, "-->",value);
    
}
// Now the question arises...Does the map works in Objects as same as in Arrays.....The answer is NO
// there are different methods of map in Objects



// --------For in loop-------------------
const newObject ={
    "greet": "Hello World!"
}
for (const key in newObject) {
    // console.log(`The First ${key} is`,newObject[key]);
    
};


// for in loop in arrays always return the keys in the form of numbers and but in objects we customize the keys and values
const greeting = ["hello world","bye world","tata"]
for (const key in greeting) {
    // console.log(key);
    
};


// -----------For Each loop-------------------

const langs = ["js","cpp","c","rust","ruby"]

// with normal function
langs.forEach(function (item) {
    // console.log(item);
    
});

// by arrow function
langs.forEach((items) =>{
    // console.log(items);
})

// different method of function
function printMe(items) {
    // console.log(items);
    
}
langs.forEach(printMe)

// basic case of array in loops

langs.forEach((items,index,arr) =>{
    // console.log(items,index,arr);
})


// -------Objects in Arrays in case of forEach loop------

const ObjectsInArray = [
    {
        cityName: "faridabad",
        cityPin: 121004
    },
    {
        cityName: "delhi",
        cityPin: 121005
    },
    {
        cityName: "Mumbai",
        cityPin: 121006
    }
]
ObjectsInArray.forEach((items) =>{
    // console.log(items.cityName);
    
})









