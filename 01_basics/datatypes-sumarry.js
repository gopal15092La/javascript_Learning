// path = " node 01_basics/datatypes-sumarry.js "
//  DEPENDING ON HOW THE DATA STORED & ACCESSED; THERE ARE TWO TYPES OF DATA-TYPES,
//  { PRIMITIVE , NON-PREMITIVE}
// 1) PRIMITIVE.....
//      7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 12
const scoreValue = 14.35

const isLoggedIn = false

const outsideTemp = null
let userMail

const id = Symbol("124");
const newId = Symbol("124")
// *) note- even if both values passed into (Symbol) is same; then also the values are different....
// console.log (id == newId)
// console.log(typeof id);


let BigNumber  = 1243243234354353453n
// console.log(typeof BigNumber) /* bigint */

// ..................................................................................................................................

// 2) NON-PREMETITVE (Reference type)--
//      Array, Object, Functions { all of these non-premitive variables types is -> OBJECT}

const heros = ["Iron man", "Thor", "Hulk"]
// console.log(typeof heros);

const myObj = {
    name : "Gopal",
    age : 22,
}
// console.log(typeof myObj);


const myFunction = function(){
    // console.log("Hello World");
}
// console.log(typeof myFunction);



//JS DYNAMICALLY TYPED..
    // avaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime



//**************************************MEMORY - TYPES ********************************************************** */

////    stack memory    vs heap memory
// 1) premitive data-Types; stored in STACK MEMORY  ; AND HERE only copy of the data type is assigned
let student1_mark = 70;
let student2_mark = student1_mark

console.log(student2_mark);
// now changing the variable
student2_mark = 89
console.log(student1_mark);
console.log(student2_mark); / * stack-memory => premitive data types => only copy of data*/


//2) NON-PREMITITIVE datatypes variables are stored in stack memory; but the data values reference is done from the 'HEAP-MEMORY' HERE THE "REFERRENCE"

let user1 = {
    email : "@yahoo",
    age : 23,
}

let user2 = user1;

console.log(user2.email);

user2.email = "@google.com"
console.log(user1.email);
console.log(user2.email);
