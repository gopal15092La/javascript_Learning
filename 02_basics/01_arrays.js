// path -> node 02_basics/01_arrays.js

// array
// (*) the "Array" object 

// let arr = [0 ,1 ,5, 2, 4 , 3]

// console.log(arr.length);

// arr.push("Gopal");
// console.log(arr)
// arr.pop();


// arr.unshift("Gopal");
// console.log(arr)
// arr.shift();
// console.log(arr)
// console.log(arr[arr.length - 1]);

// console.log(arr.includes("Gop"));
// console.log(arr.indexOf(4));
// console.log(arr);

const arr1 = [1,2,3];
const arr2 = ['a', 'b', 'c'];
// *) push ; does the operation on the same array

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[arr1.length-1]);

//*) concat(); function ; does the operation and returns and new array;

// const arrNew = arr1.concat(arr2);
// console.log(arrNew);
//Note-*) since , [concat()] takes a single argument ; we prefer [Spread operator] ;;;;

const SpreadingNew  = [...arr1, ...arr2];
console.log(SpreadingNew);
console.log("Trying To empty the above array\n");
SpreadingNew.length  = 0;
console.log(SpreadingNew);


// *******************************
//don't restrict yourself from learning things//


/*
Array.isArray()
Array.of()
Array.from()

 */