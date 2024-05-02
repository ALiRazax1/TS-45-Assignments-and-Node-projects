#! /usr/bin/env node

import inquirer from "inquirer";

// Creat variable to store all student data
let studentInformation: any = { students: [] };
// creat an array to store students ids
let studentIds: number[] = [];
// Creat function to add student data in variable
function addStudent(studentData: student) {
  studentInformation.students.push(studentData);
}

// Create function to add student id in array
function addStudentId(studentId: number) {
  studentIds.push(studentId);
}

// Use class to create student data
class student {
  name: string;
  id: number;
  course: string[];

  constructor(
    name: string,
    course: string[],
    id: number = Math.floor(Math.random() * 100000)
  ) {
    this.name = name;
    this.id = id;
    this.course = course;
  }
}

// Creat mainPage variable out side the do to mak ot accees able in while
let mainPage;

// Use do while lopp
do {
  mainPage = await inquirer.prompt([
    {
      name: "Page",
      type: "list",
      message: "Please Select",
      choices: ["Enroll Student", "Student Status", "Exit"],
    },
  ]);

  if (mainPage.Page == "Enroll Student") {
    let enroll = await inquirer.prompt([
      { name: "StudentName", type: "input", message: "Enter Student Name" },
      {
        name: "selectCourse",
        type: "checkbox",
        message: "Please Select Courses to Enroll",
        choices: [
          "Web Development",
          "App Development",
          "Flutter App Developmnent",
          "Cyber Security",
          "Graphic Desiginig",
          "Digital Marketing",
          "SEO",
        ],
      },
    ]);
    let newStudent = new student(enroll.StudentName, enroll.selectCourse);
    addStudent(newStudent);
    addStudentId(newStudent.id);
    console.log(`Your Student ID is ${newStudent.id}`);
  } else if (mainPage.Page == "Student Status") {
    let viewStudent = await inquirer.prompt({
      name: "view",
      type: "number",
      message: "Type Student ID to view Student Status",
    });
    if (studentIds.includes(viewStudent.view)) {
      let indexOfIds = studentIds.indexOf(viewStudent.view);
      console.log(studentInformation.students[indexOfIds]);
    }
  }
} while (mainPage.Page != "Exit");
