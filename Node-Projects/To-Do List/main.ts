#! /usr/bin/env node

import inquirer from "inquirer";

let closeToDo;
let toDoList: string[] = [];
console.log("WELCOME TO THE a_todo_list");

// Do while for todo
do {
  let todo = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "Please Select an Option",
      choices: ["Add Task", "Update Task", "Remove Task", "View List", "Exit"],
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
    console.log(`${addTsk.newTask} Successfully Added in Your To_Do List`);
  }
  // Update Task Option
  else if (todo.options === "Update Task") {
    const updateTsk = await inquirer.prompt({
      name: "updateTask",
      type: "list",
      message: "Please Select Your Task You Want to Update",
      choices: toDoList,
    });
    const addTsk = await inquirer.prompt({
      name: "newTask",
      type: "input",
      message: "Please Add Your Task",
    });
    const indexFinder = toDoList.indexOf(updateTsk.updateTask);
    toDoList.splice(indexFinder, 1, addTsk.newTask);
    console.log("Your To_Do List Updated Successfully");
  }

  //  Remove Task Option
  else if (todo.options === "Remove Task") {
    const removeTsk = await inquirer.prompt({
      name: "removeTask",
      type: "list",
      message: "Please Select Your Task, You Want to Remove",
      choices: toDoList,
    });

    toDoList = toDoList.filter((task) => task !== removeTsk.removeTask);

    console.log(
      `${removeTsk.removeTask} Successfully Removed from Your To_Do List`
    );
  } else if (todo.options === "View List") {
    if (toDoList.length > 0) {
      toDoList.forEach((task) => {
        console.log(`${toDoList.indexOf(task) + 1}: ${task}`);
      });
    } else {
      console.log("Your To_Do List is Empty, Please Add Some Task in Your List");
    }
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
