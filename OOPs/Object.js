// function prototypeObj(sum){
//     return sum*4
// }
// console.log(prototypeObj(4))
// prototypeObj.power = 3
// console.log(prototypeObj.power);
// console.log(prototypeObj.prototype);


// creating a new object and with the properties and call with the using constructor

// new object is created
function newObject(username,emi){
    this.username = username
    this.emi = emi
}
// prototype is linked
newObject.prototype.decrement = function(){
    this.emi--
}
newObject.prototype.display = function(){
    console.log(`"decrement in emi ${this.emi}"`);
    
}
newObject.prototype.increment = function(){
    console.log(`"increment in credit score ${this.emi}"`);
    
}
// constructor is called
const dihadi = newObject("dihadi",200)
const cibil =  new newObject("cibil",700)

// new object is returned
cibil.increment()



// advance knowledge
// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.