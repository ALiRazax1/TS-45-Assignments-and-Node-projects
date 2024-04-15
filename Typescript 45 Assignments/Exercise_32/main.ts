let cuurentUsers: string[] = [
  "aliraza",
  "bilal",
  "hasnain",
  "hammad",
  "farhan",
];

let newUsers: string[] = ["farhan", "hunain", "anas", "BILAL", "haris"];
for (let new_user of newUsers) {
  if (
    cuurentUsers.some(
      (current_user) =>
        current_user.toLocaleLowerCase() === new_user.toLocaleLowerCase()
    )
  ) {
    console.log(`${new_user} is already in use, please enter a new username`);
  } else {
    console.log(`${new_user} is available`);
  }
}
