// path of directory --> {node 02_basics/02_Objects.js}\

// methods of object declaration
//1)By constructor()method -> singleton type

// Object.create();



// 2)By Literal method

// const JsUser = {} // empty object

const mySym = Symbol("key");
const JsUser = {
    name : "Hitesh" ,// here the"KYE" --> processed as string by processor   
    age : 18,
    location : "Delhi",
    email : "Gopal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "tuesday"],
    [mySym] : "key",    // the symbol object
}

// methods to access object elements
console.log(JsUser.email);

// or 

console.log(JsUser["email"]); // we need this method; because if some keys are defined as strings; then we can not use that key with 1ST method(by dot)

//**Important question for INTERVIEW*/

// Q if Interviewr asks to make a Symbol object ; and use that as key in JsUser ; but while checking the typeof of that symbol key; It must reply that it is indeed OF SYMBOL object; not Of STRING type !!!?????

console.log(JsUser.mySym);
console.log(JsUser[mySym]);// without Quotation ; while accessing Symbol() object...

console.log(typeof(mySym));

// to Fix the key& values of any object; we FREEZ thaat object'
// Object.freeze(JsUser);
console.log(JsUser);


// We can also put functions in objects
JsUser.greeting = function (){
    console.log("Hello Gopal");
}

console.log(JsUser.greeting());
