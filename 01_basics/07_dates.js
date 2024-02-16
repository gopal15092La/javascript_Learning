// path - 01_basics/07_dates.js
// node_command - node 01_basics/06_nums_and_math.js
// *)Note - Javascript "Date" object represents a single moment in time in a platform-independent format.
// Date object encapsulates an integral number that represents milliseconds 
// since the midnight at the beginning of " January -01 - 1970"

// path -> node 01_basics/07_dates.js

// Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let createdDate = new Date(2023, -1, 32);/* creating our own dates */
// console.log(createdDate.toDateString());


let myTimeStamp = Date.now() /* this will give the total mili-seconds from the Jan-01-1970 */
 
// console.log(myTimeStamp);
// console.log(createdDate.getTime()); /* To get our declared date in terms of milliseconds; which is used to compare different dates */
// To get the milliseconds -> converted into seconds...
// console.log(Math.floor(Date.now()/1000));


// *) SOme more operations
let newDate = new Date();
console.log( typeof newDate );
console.log(newDate); /* YYYY -- DD -- MM (Months start from 0-jan, 1-feb*/
console.log(newDate.getMonth());
console.log(newDate.getDay());




