//Start with program from Exercise 15. 
let Guest: Array<string> = ["Khizar","Hasan","Anas","Bilal","Hassan"];
for(let i = 0; i<Guest.length; i++) {console.log(`Hi ${Guest[i]} come to my house tonight for dinner it will be a great pleasure for me`)}

//Friend who can not attend the dinner
let canNotAttend = "Bilal"
console.log(`${canNotAttend} can't make it to the dinner`)


//Replace a guest
let newGuest = "Ahmed"
Guest[Guest.indexOf(canNotAttend)] = newGuest

//Second set of invitation messages, who still invited

for(let i = 0; i<Guest.length; i++) {console.log(`Hi ${Guest[i]} come to my house tonight for dinner it will be a great pleasure for me`)}


//                                      Start Exercise 16


// Inform people about bigger dinner table
console.log("Good News! I found a bigger dinner table");

//New guest at beginning of the array.
Guest.unshift("Hunain");

//New guest at middle of the array.
Guest.splice(3,0,"Ammar")

//New guest at end of the list
Guest.push("Ali")
console.log(Guest);



//New set of invitation messages toeach person in the list.
 for(let i = 0; i<Guest.length; i++) {console.log(`Hi ${Guest[i]} come to my house tonight for dinner it will be a great pleasure for me`);
 }