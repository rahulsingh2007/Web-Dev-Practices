// Var - Globally Scoped
// Example
/* var a = 6;
{
    var a = 66;
    console.log(a)
}
console.log(a)
 */
/* Output: 66
           66 */

// Let - Block-level Scoped
// Example
/* let a = 6;
{
    let a = 66;
    console.log(a)
}
console.log(a)
 */
/* Output: 66
           6 */

// Const - Fixes a value to a variable that cannot be changed by any method
// Example
/* const a = 6;
    a=a+1
    console.log(a) */
/* Output: TypeError: Assignment to constant variable */

// Primitive Data types
/* let a="Rahul"
let b=22;
let c=3.55;
const p =true;
let q=undefined;
let r=null;
console.log(a,b,c,p,q,r)
console.log(typeof a,typeof b,typeof c,typeof p,typeof q,typeof r) */

// Object
/* let o={
    // key: value
    name: "Harry",
    "job code": 800 //Since there is a space between job and code they should be wriiten inside double inverted commas 
}
console.log(o) */
// To add another object from outside
/* o.salary = "100crores"
console.log(o) */

// Data types
// String
/* let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345)

// Boolean
let c = true;
let d = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let e;
let f;

// Null
let g = null;
let h = null;

// Symbol
const i = Symbol();
const j = Symbol(); */