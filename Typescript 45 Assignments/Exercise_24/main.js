"use strict";
// Test equality and inequality with strings
console.log("mango" === "mango");
// @ts-ignore
console.log("mango" === "Mango");
// Test with lower case function
console.log("Mango".toLowerCase() === "mango");
console.log("Mango".toLowerCase() === "Mango");
// Test equality with numbers;
console.log(5 === 5);
// @ts-ignore
console.log(5 === 3);
// Test using greater than 
console.log(5 > 3);
console.log(5 > 6);
// Test using less than
console.log(5 < 6);
console.log(5 < 3);
// Test using greater than or equal to
console.log(5 >= 5);
console.log(5 >= 6);
// Test using less than or equal to
console.log(5 <= 5);
console.log(5 <= 3);
// Test using and operator
console.log(true && true);
console.log(false && true);
// Test using or operator
console.log(false || true);
console.log(false || false);
// Test whether an item is in a array
let fruits = ["mango", "banana", "orange"];
console.log(fruits.includes("mango"));
console.log(fruits.includes("apple"));
// Test whether an item is not in a array
console.log(!fruits.includes("apple"));
console.log(!fruits.includes("orange"));
