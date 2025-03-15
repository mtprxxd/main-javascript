// THIS in js
// (this) is an empty object

// const user = {
//     name: "Mani",
//     GenderMale: true,
//     greetFunction: function dash(){
//         console.log(`${this.name}, welcome to website`)
//         // console.log(this);
// //         // (this) method allows us to give output of present reference present in object

//     }
// }
// user.greetFunction()
// user.name = "Manmeet"
// user.greetFunction()
// console.log(typeof this)
// console.log(this)


// now check that this method will work in arrow function or not?

// const dash = () =>{
//     const user = "mani"
//     // console.log(this.user)
// }
// dash()
// console.log(this.user);




// --------------ARROW functions-------------

// this method of setting is called implicit return,where if you want to use the {} then you have to use the keyword return otherwise you can use the () without using return.

// const sum =  (a,b) => {
//     return a+b
// }
// console.log(sum(2,3))
// ------------------------------------------------
// Implicit method
// const sum =  (a,b) => (a+b)
// console.log(sum(2,3))

// ---------------------------------
// Returning object implicitively
// const sum =  (a,b) => ({username:"manmeet"})
// console.log(sum(2,3))