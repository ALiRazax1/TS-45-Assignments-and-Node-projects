//Start with program from Exercise 14. 

let Guest: Array<string> = ["Khizar","Hasan","Anas","Bilal","Hassan"];
for(let i = 0; i<Guest.length; i++) {console.log(`Hi ${Guest[i]} come to my house tonight for dinner it will be a great pleasure for me`)}



//                                      Start Exercise 15

//Friend who can not attend the dinner
let canNotAttend = "Bilal"
console.log(`${canNotAttend} can't make it to the dinner`)


//Replace a guest
let newGuest = "Ahmed"
Guest[Guest.indexOf(canNotAttend)] = newGuest

//Second set of invitation messages, who still invited

for(let i = 0; i<Guest.length; i++) {console.log(`Hi ${Guest[i]} come to my house tonight for dinner it will be a great pleasure for me`)}






