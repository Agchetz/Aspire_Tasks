// newly added global methods

//isFinit()
//The isFinite() method returns false if the argument is Infinity or NaN.
document.querySelector("body").innerHTML =
isFinite(10 / 0) + isFinite(10 / 1);


//isNaN
//The isNan() method returns true if the argument is NaN. Otherwise it returns false.
document.querySelector("body").innerHTML =
isNaN("Hello") + isNaN("10");


//  newly added number methods


// .safeinteger()
// The isSafeInteger() method returns true if the argument is a safe integer.
// This is safe: 9007199254740991. This is not safe: 9007199254740992.
document.querySelector("body").innerHTML =
Number.isSafeInteger(10) + Number.isSafeInteger(123445676786868);

//isinteger()
document.querySelector("body").innerHTML =
Number.isInteger(10) + Number.isInteger(10.5);


//  number properties

let x = EPSILON;
let y = MIN_SAFE_INTEGER;
let z = MAX_SAFE_INTEGER;


// new math.methods

// The Math.log10() Method
// The Math.cbrt() Method
// The Math.log2() Method
// The Math.sign() Method
// The Math.trunc() Method
document.querySelector("body").innerHTML = Math.log10(1000);


//Array and String methods


// from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.
const myArr = Array.from("ABCDEFG");

//keys()
//The Array.keys() method returns an Array Iterator object with the keys of an array.

