#! /usr/bin/env node
import inquirer from "inquirer";
let wordCounter = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Please write the sentence to count it's words and letter.",
});
if (wordCounter.sentence.length === 0) {
    let words = wordCounter.sentence.split("");
    console.log(`Your sentence contains ${words.length} words`);
    console.log(`Your sentence contains 0 letters`);
}
else {
    let words = wordCounter.sentence.trim().split(" ");
    let letters = words.join("");
    console.log(`Your sentence contains ${words.length} words`);
    console.log(`Your sentence contains ${letters.length} letters`);
}
