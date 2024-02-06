// ........................ "String Concatenation" VS "String Interpolation" 

function myFun1( fname, lname, school) {
    return "My name is " + fname + /*" \n" +*/ lname + ". " + "I study in " + school ;
}
console.log( myFun1("Gopal", "Panda", "GGSIPU"));

function myFun2( fname, lname, school) {
    let temp = `My name is ${fname.toUpperCase()} ${lname}. I study in the school of ${school}`; 
    return temp;
}
console.log( myFun2("Gopal", "Panda", "GGSIPU"));

// NOte on Advantages of String Interpolation over string concatenation ......
/// i) string interpolation helps in "Variable Injection"  in a string.
// ii) String interpolation can use "Multi- lined large srting "; without use of "escape-sequence-character (\n) "; as of in "String Concatenation "
// iii) We can Perform opeartions to the " variables "; such as "Arithematic " or " ToUpper / ToLower "; etc. 

// ......................................................................................................................................


// *NOTE -  in java script ;
// "String()" is a constructor of "String" Object..... so new String("Gopal"); is creating a NEW instance of String Object; 
//      where as [let variable = "Gopal"]; is a "Primitive string data-types ".................  
let sample = new String(" Gopal ")
// console.log(sample);

sample = "Gopal"
// console.log(sample);

// ....................................various string opeartions ...................................
let name = "  Gopal Krushna  ";

console.log(name.charAt(3));
console.log(name);
console.log(name.trim());