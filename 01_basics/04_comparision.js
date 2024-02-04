//..............same DATA-TYPES comparision operations.....................
//  console.log(5 > 4)
// console.log(5 >= 4)
// console.log(5 < 4)
// console.log(5 == 4)
// console.log(5 != 4)


//........................DIFFERENT DATA-TYPES comparision opeartion..........................................//
//*) Note - here by-defaule it converted the string into Number
// console.log("2" > 1)
// console.log("02" > 1)

//*) Note - the comparision operator work different way in JAVASCRIPT, they convert NULL -> 0 ; But 
//          for == equal operator it is different
console.log(null > 0)
console.log(null >= 0)
// .....vs......
console.log(null == 0)


console.log(undefined == 0);
console.log(undefined > 0 );
console.log(undefined < 0 );

// *) STRICT_CHECK ( === )
// IT CHECKS "VALUES" as well as "Data_Types"