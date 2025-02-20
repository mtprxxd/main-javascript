const newDate = new Date();
// console.log(newDate);
// console.log(newDate.toString());
console.log(newDate.toDateString());
// console.log(newDate.toTimeString());
// console.log(newDate.toJSON());
// console.log(newDate.toISOString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleString());

// const createDate = new Date(2024,1,10,10,55,20);
// console.log(createDate.toLocaleString());

// let date = Date.now();
// console.log(date);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDash = new Date();
// console.log(newDash.getHours());
// console.log(newDash.getDay());
// console.log(newDash.getMonth());
// console.log(`Month is ${newDash.getMonth()}, Day is ${newDash.getDay()} and the time is ${newDash.getHours()}:${newDash.getMinutes()}:${newDash.getSeconds()}`);
// console.log(`Month is ${newDash.getMonth()}, Day is ${newDash.toDateString()} and the time is ${newDash.getHours()}:${newDash.getMinutes()}:${newDash.getSeconds()}`);

let newDateLong = newDate.toLocaleString('default',{
    weekday: "long"
});

console.log(newDateLong);
