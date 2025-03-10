// (This block is called GLOBAL SCOPE)
// var c = 20;        
// const b = 60;       


// (This block is called BLOCK SCOPE)
// if (true) {       
//     let a = 20;    
//     const b = 30;  
//     var c = 40;   
// }
// console.log(a);
// console.log(b);
// console.log(c);


// -------------NESTED SCOPE------------------
// it's like an ice-cream where the parent can,t take the ice-cream or function access from their child function but in case of child element they can directly access the function
function papa() {
    const NAME = "rajesh"

    function beta() {
        const name  = "mani"
        console.log(NAME)
    }
    // console.log(name);
    beta()
    
}
papa()


