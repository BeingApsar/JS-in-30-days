let score = 33
//console.log(score);
//console.log(typeof score)

let stringScore = String(score)
//console.log(stringScore) => 33
//console.log(typeof stringScore) => string

let  scores = "44abc"
//console.log(scores)
//console.log(typeof scores)

let NumberIn = Number(scores)
//console.log(NumberIn)  => Nan
//console.log(typeof NumberIn) => this the error its type is printing Number

let value = null
//console.log(value) => null
//console.log(typeof value) => object

let values = undefined
//console.log(values) => undefined
//console.log(typeof values) => undefined

let isLoggedIN = 0

let booleanisLoggedIN = Boolean(isLoggedIN)

//console.log(isLoggedIN) => 0 
//console.log(booleanisLoggedIN) => false
// 1 => true 
// 0 => false
// "apsar"=> true 
// ""=> false



//************************************** operations *************************************

let valuex = 3
let negvalue = -valuex
//console.log(negvalue)

// console.log(2+2)
// console.log("2"+1+7)
// console.log(2+3+"5")

let x = 5
const y = ++x
console.log(`x:${x},y:${y}`);
//x=6;y=6 bucz of prefixs ++x means 1+x then it resign the value of x =6 and y= 6;

let a = 5
const b = a++
console.log(`a:${a},b:${b}`);
//a:6,b:5 bucz of postfixs a++ is a+1 then it resign the value of a=6 and b be the same a value that is 5;

