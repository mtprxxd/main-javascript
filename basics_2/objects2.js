// concept of Nested Objects

const arrObject = {
    
        name: "abc",
        id: "123@google.com",
        fullname: {
            firstname: "mani",
            lastname: "panwar",
            loginCredentials:{
                isLoggedin: true,
                logOut: "done"
            }
    }
    }

    const finalArr = arrObject.fullname.loginCredentials.isLoggedin;
    console.log(finalArr);
    


//     // to merge 2 objects

//     const obj1= {"a": 1,"b":2,"c":3}
//     const obj2= {"c": 4,"d":5,"e":6}

//     const obj3 = Object.assign(obj1,obj2);
//     console.log(obj3);


    // effective method to merge 2 objects
    // const obj4 = {...obj1, ...obj2}
    // console.log(obj4);
    
    // objects inside an array
    // const newArray = [
    //     {
    //         name: "annu",
    //         id: 3
    //     },
    //     {
    //         name: "annu",
    //         id: 3
    //     },
    //     {
    //         name: "annu",
    //         id: 3
    //     },
    //     {
    //         name: "annu",
    //         id: 3
    //     }
    // ]

    // newArray[2].name = "mani";
    // console.log(newArray);
    
// to check whether a property inside an object exist?
    console.log(arrObject.fullname.loginCredentials.hasOwnProperty("logOut"));
    

// time to De-structure an object

const deStructArray = {
    name: "manmeet",
    id: 18
}
const {name: newName} = deStructArray;
console.log(newName);
