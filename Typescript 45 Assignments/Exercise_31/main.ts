let userNames: string[] = ["Ahmed", "Hassan", "Admin", "Anas", "Bilal"];
// Remove all the users from the array
userNames.splice(0)
if (userNames.length > 0) {
  for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
  }
} else {
  console.log("We need to find some users!");
}
