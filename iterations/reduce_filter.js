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
// console.log(dom);


// using filter in objects in arrays to filter the values of a particular object.

const empty = []
const new_obj_in_arr = [
    {
        car : "WagonR",
        company : "Maruti suzuki",
        BQ : "2 star",
        year : 1994

},
{
        car : "santro",
        company : "Hyundai",
        BQ : "3 star",
        year : 1999
},
{
        car : "Nexon",
        company : "TATA",
        BQ : "4 star",
        year : 2018
},
{
        car : "punch",
        company : "TATA",
        BQ : "4 star",
        year : 2019
},
{
        car : "fortuner",
        company : "Mahindra",
        BQ : "4 star",
        year : 2011
}
]

const new_arr = new_obj_in_arr.filter((items) => {return items.year < 2000})
// console.log(new_arr);


// practice
// Given an array of names ["Ayush", "Manie", "Rohit", "Raj"], filter out names that start with "R"

const names = ["Ayush", "Manie", "Rohit", "Raj", "Rampal", "rahul"]

const filter_r = names.filter(r_names => r_names.startsWith('R') || r_names.startsWith('r'))
// console.log(filter_r);



// ------------------------------Map in array---------------------------

// map() is used to update the value in original array 
// also we can perform chaining by using multiple map() method or filter()

const get_names = [
        {
                name : "Manmeet",
                age : 2
        },
        {
                name : "Abhay",
                age : 1
        },
        {
                name : "Mohit",
                age : 3
        },
        {
                name : "Annu",
                age : 2
        },
        {
                name : "Deepanshu",
                age : 1
        }
]

const map_filter = get_names
                            .map((nums) => nums.age * 9 + 5)
                            .map((nums) => nums.age - 1)
                            .filter((nums) => nums.age >= 18 )

console.log(map_filter);




