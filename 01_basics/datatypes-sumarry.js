// DEPENDING ON HOW THE DATA STORED & ACCESSED; THERE ARE TWO TYPES OF DATA-TYPES,
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
console.log(typeof id);


let BigNumber  = 1243243234354353453n
console.log(typeof BigNumber) /* bigint */

// ..................................................................................................................................

// 2) NON-PREMETITVE (Reference type)
//      Array, Object, Functions { all of these non-premitive variables types is -> OBJECT}

const heros = ["Iron man", "Thor", "Hulk"]
console.log(typeof heros);

const myObj = {
    name : "Gopal",
    age : 22,
}
console.log(typeof myObj);


const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);



//JS DYNAMICALLY TYPED..
    // avaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime

