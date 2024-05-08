// There are two types that are primitive data types and reference data types

// Primitive data type  
// 7 Types : String, Boolean, Number, Null, Undefined, BigInt, Symbol

 const name = "apsar"  /* string */
 const value = 56      /* number */
 let emailId /* undefined */

 const id = Symbol("123") /* symbol */
 const anotherID = Symbol("123")  /* symbol */

// console.log(typeof name); => string
// console.log(typeof value); => number
// console.log(typeof emailId); => undefined
// console.log(typeof id) => symbol
// console.log(id === anotherID); => false


// non primitive or  reference data types
// object , array , function

// array

let array = ["apsar",1,2,3,true]

// object

let person = {
    name:'apsar',
    age:5 ,
    city:'Vijaywada',
}

console.log(person);

// function

function greets(name) {
    return 'Hello, '+  name + 'Good Morning !'
}

let greetingMessage = greets('apsar')

console.log(greetingMessage);
