// ........................ CONVERSTION OF DATATYPES..........................
let score = "Gopal"

// *) methods to know the ............type of variable....
// console.log(typeof score);
// console.log(typeof (score));

// *) now -> Converstion to "Number" ..................

let variable = Number(score);
// variable = Number(score);
// console.log(typeof variable);
// console.log(variable);

// 8) Notes on .................. conversion into Number
//      "33"  => 33
//      "gopal33"   => NaN
//      true=> 1;  false=>0
// .....................................................................................

//*) converion to ...........Boolean.............
// score = "";
// score = false
variable = Boolean(score);
// console.log(typeof Boolean);
// console.log(variable);

// *)  Notes on ............. conversion into Boolean
//  1=>true; 0=>false;
// "gopal" => true;
// ........................................................................

// *) conversion to ............ String
// score = "HI";
// score = false;
// score = 34;
// console.log(typeof(score));
variable = String(score);
// console.log(typeof(variable));
// console.log(variable);

//...........................................ENDS......................................
//................................OPERATIONS......................................
let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(5**3);
// console.log(5*3);
// console.log(5%3);

let str1 = "Gopal"
let str2 = "Krushna"
// console.log("answer is -->" + str1 + str2);

//********** important {conversion into Primitive data types as per some ECMA script rules} */
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log("Gopal" + false);

//*) .............. prefix & Postfix increament operator.........................................
let x = 5
console.log(x++);
console.log(x);
// console.log(++x);