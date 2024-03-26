"use strict";
let person_name = "ali raza";
//T Lower Case
console.log(person_name.toLowerCase());
//To Upper Case
console.log(person_name.toUpperCase());
// To Title case;
let splitPerson_Name = person_name.split(" ");
let titleCase = "";
for (let i = 0; i < splitPerson_Name.length; i++) {
    titleCase += splitPerson_Name[i].charAt(0).toUpperCase() + splitPerson_Name[i].slice(1) + ' ';
}
;
console.log(titleCase);
