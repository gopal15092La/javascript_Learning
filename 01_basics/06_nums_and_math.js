// path -> 01_basics/06_nums_and_math.js

const score = 400
// console.log(score);

let balance = new Number(100);
// console.log(balance);


/* Number operations */
//NoTe-*)
// console.log(balance.toString());  // converted into String
// console.log(balance.toString().length); // converted to string-> then DERIVED the string Length
// console.log(balance.toFixed(4));// number of "Decimal" places defined ; this is used E.x.-> in E-commerce sites

// Re-assigining String Value of a Number object
// console.log(typeof balance);
// balance = balance.toString();
// console.log(typeof balance);

// .....toPrecision(value) function;
// *)Note- the number of precision digits are COUNTED from the "Left-Most non-zero value";
let number1 = 1.32435202
// console.log(number1.toPrecision());
// console.log(number1.toPrecision(5));
// console.log(number1.toPrecision(2));
// console.log(number1.toPrecision(1));


let number2 = 0.000205243
// console.log(number2.toPrecision());
// console.log(number2.toPrecision(3));
// console.log(number2.toPrecision(2));

///
const hundreds = 1000000
// console.log(hundreds.toLocaleString())/* standard- 'US country' format -- string representation*/
// console.log(hundreds.toLocaleString( "en-IN")); /* This represents the string - used in 'INDIA' */



//+++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
