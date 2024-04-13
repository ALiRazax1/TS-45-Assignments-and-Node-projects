"use strict";
// Non alphabetical order list of locations
let favouritePlaces = [
    "Canada",
    "Switzerland",
    "Iceland",
    "USA",
    "Denmark",
];
console.log(favouritePlaces);
// make array in alphabetical order without modifying the actual list.
console.log([...favouritePlaces].sort());
//Array is still in its original order by printing it.
console.log(favouritePlaces);
// Reverse alphabetical order without changing the original list.
console.log([...favouritePlaces].sort().reverse());
//Array is still in its original order.
console.log(favouritePlaces);
//Reverse the order and show that its order has changed.
favouritePlaces.reverse();
console.log(favouritePlaces);
//Reverse the order and show it’s back to its original order.
favouritePlaces.reverse();
console.log(favouritePlaces);
//Sort array in alphabetical order and show that its order has been changed.
favouritePlaces.sort();
console.log(favouritePlaces);
//Sort in reverse alphabetical order and show that its order has changed.
favouritePlaces.reverse();
console.log(favouritePlaces);
