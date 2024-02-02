// storing some info. of an USER in memory space
// container config done ---> then ---> "PUSH"
// path -> 01_basics/01_variables.js
/*
    prefer not to use "var"
    beacause issue in 'Block scope' & 'functional scope'
*/
const accountId = 123456
let accountEmail = "Gopal@gmail.com"
var accountPassword = "Gopal123@"
let accountState 
// node 01_basics/01_variables.js
accountCity = "Delhi"

// accountId = 34 {varibles with "const" keyword can not be updated }
console.table([accountId, accountEmail, accountPassword, accountCity,accountState ])
accountEmail = "bapo@gmail.com"
accountPassword = "Bapo123@"
accountCity = "ganjam"
accountState  ="Odisha"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState ])
console.log(5*6);