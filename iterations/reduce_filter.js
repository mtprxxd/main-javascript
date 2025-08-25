const langs = ["js","cpp","c","rust","ruby"]

const read = langs.forEach((items)=>{
    // console.log(items)
    // return items
// so what is happening here?
// sometime we just want to return some particular value not to print or display on operation.here forEach loops fails!
});
// console.log(read)


// -----------------Filter map----------------------

const random_arr = [1,2,3,4,5,6,7,8,9,10]

// const dom = random_arr.filter((mode) => {
//     return mode > 6
// })
// console.log(dom);


const dom = []

    random_arr.forEach((items)=>{
    if (items > 6) {
        dom.push(items);
        
    }
    
})
console.log(dom);
