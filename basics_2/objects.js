// singleTon

// Object literals

// const anySym = Symbol("huehuehue");

const anyObj = {
    name: "Manmeet",
    "full name": "Manmeet Panwar",
    // [anySym]: "hulahularihule", used as symbol
    age: 22,
    proffesion: "Software Developer",
    place: "Delhi",
    email: "manmeet@amazon.com",
    isLoggedIn: false,
    activeDays: ["Monday","friday","sunday"]

}
console.log(anyObj);
// console.log(anyObj.name);
// console.log(anyObj["name"]);
// console.log(anyObj[age]);
// console.log(anyObj["age"]);
// console.log(anyObj["activeDays"]);
// console.log(anyObj["full name"]);
// console.log(anySym);
// console.log(anyObj[anySym]);

// to freeze the object use freeze()
// Object.freeze(anyObj);
// anyObj.age = 20;
// console.log(anyObj.age);