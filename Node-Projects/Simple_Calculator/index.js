#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Expotention",
            "Remainder (TO CALCULATE REMAINDER fIRST NUMBER SHOULD BE GREATER OR EQUAL TO SECOND NUMBER)",
            "Percentage",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log(`Your value is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`Your value is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`Your value is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division") {
    console.log(`Your value is ${answer.firstNumber / answer.secondNumber}`);
}
else if (answer.operator === "Expotention") {
    console.log(`Your value is ${answer.firstNumber ** answer.secondNumber}`);
}
else if (answer.operator ===
    "Remainder (TO CALCULATE REMAINDER fIRST NUMBER SHOULD BE GREATER OR EQUAL TO SECOND NUMBER)") {
    if (answer.firstNumber >= answer.secondNumber) {
        console.log(`Your value is ${answer.firstNumber % answer.secondNumber}`);
    }
    else
        console.log("First Number Should be Greater or Equal to Secnnd Number");
}
else if (answer.operator === "Percentage") {
    console.log(`Your value is ${(answer.firstNumber / answer.secondNumber) * 100}`);
}
else {
    console.log("Pleas select a valid operator");
}
