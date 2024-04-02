#! /usr/bin/env node
import inquirer from "inquirer";
let correctPin = 1234;
let totalBalance = 50000;
console.log("Pin Code is 1234");
const userPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Please Enter Your Pin Code To Proceed",
});
if (userPin.pin === correctPin) {
    console.log("Login Successfully");
    const atmOption = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "What do You Want To Do",
            choices: ["Withdraw Amount", "Balance Check", "Fast Cash"],
        },
    ]);
    if (atmOption.options === "Withdraw Amount") {
        const WithdrawCash = await inquirer.prompt({
            name: "WithdrawAmount",
            type: "number",
            message: "Please Enter Amount",
        });
        if (WithdrawCash.WithdrawAmount <= 50000) {
            console.log(`${WithdrawCash.WithdrawAmount} Withdraw Successfully\nYour Remaining Balance is ${totalBalance - WithdrawCash.WithdrawAmount} `);
        }
        else {
            console.log("You Have Insufficient Balance ");
        }
    }
    else if (atmOption.options === "Balance Check") {
        console.log(`Your Current Balance is ${totalBalance}`);
    }
    else if (atmOption.options === "Fast Cash") {
        const fastCash = await inquirer.prompt({
            name: "fastCash",
            type: "list",
            message: "Please Select Cash",
            choices: ["2000", "5000", "10000", "20000"],
        });
        console.log(`${fastCash.fastCash} Withdraw Successfully\nYour Remaining Balance is ${totalBalance - fastCash.fastCash}`);
    }
}
else {
    console.log("Invalid Pin Code");
}
