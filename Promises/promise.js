// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log("async task complete");
//         // promise will consume only if we use resolve() in here becoz they fulfill with each other
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed")
// })



// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log("async task complete2");
//         // we can pass the parameters inside resolve as an object.
//         resolve({name: "Manmeet",email: "huehue@example.com"})
//     },2000)
// })
// promiseTwo.then(function(view){
//     console.log(view)
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         let error = false;
//         if(!error){
//             resolve({name: "Manmeet",email: "huehue@example.com"})
//         } else{
//             reject("Error: Something Went Wrong")
//         }
//     },1000)
// })
// promiseThree.then((user) => {
//     console.log(user)
//     return user.email
// }).then((myUser)=>{
//     console.log(myUser)
//     return myUser.email
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("The promise is either resolve or reject")
// })



// we can either use async and await function to extract output in promises
//  const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         let error = false;
//         if(!error){
//             resolve({name: "Manmeet",password: "12345"})
//         } else{
//             reject("Error: Code Went Wrong")
//         }
//     },1000)
// })
// async function consumePromiseFour(){
//     const response = await promiseFour
//     console.log(response);
// }
// consumePromiseFour()



// we can either use try and catch to handle the errors
 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if(!error){
            resolve({name: "Manmeet",password: "12345"})
        } else{
            reject("Error: Code Went Wrong")
        }
    },1000);
});
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()