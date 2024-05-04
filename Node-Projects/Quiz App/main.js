#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class questions {
    name;
    question;
    option;
    correctAnswer;
    constructor(name, question, option, correctAnswer) {
        this.question = question;
        this.option = option;
        this.correctAnswer = correctAnswer;
        this.name = name;
    }
}
const quiz = [
    new questions("q1", "What is TypeScript?", [
        "A) A superset of JavaScript",
        "B) A framework for building web applications",
        "C) A database management system",
        "D) A styling library for HTML",
    ], "A) A superset of JavaScript"),
    new questions("q2", "What does the 'interface' keyword do in TypeScript?", [
        "A) Declares a new class",
        "B) Defines a function",
        "C) Specifies a custom type",
        "D) Creates a loop",
    ], "C) Specifies a custom type"),
    new questions("q3", "How do you define an array in TypeScript?", [
        "A) let array = []",
        "B) array[]",
        "C) let array: Array<number> = []",
        "D) const array = {}",
    ], "A) let array = []"),
    new questions("q4", "Which symbol is used for type assertion in TypeScript?", ["A) ->", "B) :", "C) <>", "D) ::"], "C) <>"),
    new questions("q5", "What does 'tsc' stand for in TypeScript?", [
        "A) TypeScript Compiler",
        "B) TypeScript Checker",
        "C) TypeScript Converter",
        "D) TypeScript Creator",
    ], "A) TypeScript Compiler"),
    new questions("q6", "Which operator is used for optional chaining in TypeScript?", ["A) ..", "B) ?.", "C) !!", "D) ~~"], "B) ?."),
    new questions("q7", "What is the purpose of the 'any' type in TypeScript?", [
        "A) It represents any data type",
        "B) It defines an array",
        "C) It specifies a function",
        "D) It creates an object",
    ], "A) It represents any data type"),
    new questions("q8", "How do you define a function in TypeScript with optional parameters?", [
        "A) function add(a: number, b?: number?) {}",
        "B) function add(a: number, b!: number) {}",
        "C) function add(a: number, b?: number!) {}",
        "D) function add(a: number, b?: number) {}",
    ], "D) function add(a: number, b?: number) {}"),
    new questions("q9", "What does the 'readonly' keyword do in TypeScript?", [
        "A) Allows reassignment of a variable",
        "B) Marks a property as immutable",
        "C) Defines a class",
        "D) Enables private access to a property",
    ], "B) Marks a property as immutable"),
    new questions("q10", "What is the purpose of the private keyword in TypeScript?", [
        "A) Makes a property read-only",
        "B) Makes a property writable",
        "C) Makes a property only accessible within the class",
        "D) Makes a property optional",
    ], "C) Makes a property only accessible within the class"),
];
//   Creat askToRestart variable outside the block scope so it can be assessable in while condition
let askToRestart;
//   creat score variable to store total score
let score = 0;
//   creat questionAttmpt variable to store total question attempt
let questionAttmpt = 0;
console.log(`                       ${chalk.greenBright.bold.green(`Welcome in our quiz app`)}

        ${chalk.bold.redBright(`You will have to answer 10 questions about "Typescript"`)}`);
setTimeout(() => {
    console.log(chalk.yellowBright(`
                Please wait, The Quiz is about to start`));
}, 2000);
setTimeout(async () => {
    do {
        for (let ques of quiz) {
            let answer = await inquirer.prompt({
                name: ques.name,
                message: chalk.whiteBright.underline(ques.question),
                type: "list",
                choices: ques.option,
            });
            if (answer[ques.name] == ques.correctAnswer) {
                score = ++score;
            }
            questionAttmpt = ++questionAttmpt;
        }
        if (questionAttmpt == quiz.length) {
            console.log(chalk.blueBright.bold(`\nYou scored: ${score}/${quiz.length}`));
        }
        askToRestart = await inquirer.prompt({
            name: "User Choice",
            message: "Do you want to start quiz again",
            type: "list",
            choices: ["Yes", "No"],
        });
    } while (askToRestart["User Choice"] != "No");
    // Print Thnak you message if user end the quiz
    if (askToRestart["User Choice"] == "No") {
        console.log(chalk.blueBright.bold("\nThank you for playing the quiz"));
    }
}, 4500);
