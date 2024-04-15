"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suffix = 'st';
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
        suffix;
    }
    else if (numbers[i] === 2) {
        suffix = "nd";
    }
    else if (numbers[i] === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log(`${numbers[i]}${suffix}`);
}
