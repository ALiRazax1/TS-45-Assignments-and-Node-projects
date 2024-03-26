#! /usr/bin/env node
import inquirer from "inquirer";
// let correctNumber = 5;
let correctNumber = Math.floor(Math.random() * 10 + 1);
let guessedNumber;
let remaingChances = 3;
console.log(` Welcome to the 'a_guessing_game' This is a simple guessing game where you have to guess a number between 1-10 \n\tYou Have Only 3 Chances to Guess the Correct Number\t`);
// Used do while
do {
    guessedNumber = await inquirer.prompt({
        name: "userGuess",
        type: "number",
        message: "Enter a number between 1 to 10",
    });
    // Nested conditonal statements under  "do" condition
    if (guessedNumber.userGuess !== correctNumber && remaingChances > 0) {
        if (guessedNumber.userGuess !== correctNumber && remaingChances === 1) {
            console.log("\t------Game Over------\t");
        }
        else if (guessedNumber.userGuess !== correctNumber &&
            remaingChances > 1) {
            console.log("Try Again");
        }
    }
    if (guessedNumber.userGuess === correctNumber && remaingChances !== 0) {
        console.log("Hurray!!! You have Guessed the Correct Number");
    }
    remaingChances--;
    if (remaingChances === 1 && guessedNumber.userGuess !== correctNumber) {
        console.log("You have only one chance left");
    }
    else if (remaingChances > 1 && guessedNumber.userGuess !== correctNumber) {
        console.log(`You have ${remaingChances} chnaces left`);
    }
    else if (guessedNumber.userGuess === correctNumber) {
    }
    else
        console.log("You have no chance left");
} while (guessedNumber.userGuess !== correctNumber && remaingChances !== 0);
