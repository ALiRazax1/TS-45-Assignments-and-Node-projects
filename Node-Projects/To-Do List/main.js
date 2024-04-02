#! /usr/bin/env node
import inquirer from "inquirer";
let closeToDo;
let toDoList = [];
console.log("WELCOME TO THE a_todo_list");
// Do while for todo
do {
    let todo = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Please Select an Option",
            choices: ["Add Task", "Remove Task", "View List", "Exit"],
        },
    ]);
    // Add Task Option
    if (todo.options === "Add Task") {
        const addTsk = await inquirer.prompt({
            name: "newTask",
            type: "input",
            message: "Please Add Your Task",
        });
        toDoList.unshift(addTsk.newTask);
        console.log(`${addTsk.newTask} Successfully Added in Your TO_DO List`);
    }
    //  Remove Task Option
    else if (todo.options === "Remove Task") {
        const removeTsk = await inquirer.prompt({
            name: "removeTask",
            type: "input",
            message: "Please Type Your You Want to Remove",
        });
        if (toDoList.includes(removeTsk.removeTask)) {
            let indexFinder = toDoList.indexOf(removeTsk.removeTask);
            toDoList.splice(indexFinder, 1);
            console.log(`${removeTsk.removeTask} Successfully Removed`);
        }
        else {
            console.log(`No Task Found With A Name of ${removeTsk.removeTask}`);
        }
    }
    else if (todo.options === "View List") {
        toDoList.forEach((task) => {
            console.log(`${toDoList.indexOf(task) + 1}: ${task}`);
        });
    }
    // Exit Option
    else if (todo.options === "Exit") {
        closeToDo = await inquirer.prompt({
            name: "exitToDO",
            type: "confirm",
            message: "Are You Sure",
            default: false,
        });
    }
} while (closeToDo?.exitToDO !== true);
