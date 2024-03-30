// Arrays
let orgArr = [1,2,3,4,5,6];
console.log(orgArr);

let newArr = new Array(1,2,3,4,5,6);
console.log(newArr[1]);

// -------------------------------------------------------
// Methods
orgArr.push(7);
// orgArr.pop();

// orgArr.unshift(1);
// orgArr.shift();
console.log(orgArr);

console.log(orgArr.includes(7));

const nArr = orgArr.join();
console.log(nArr);

console.log(typeof nArr);