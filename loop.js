for (let i = 0; i < 10; i++) {
  console.log(i);
};

const users = ["max", "anna", "ahmed"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
};

for (const user of users) {
  console.log(user);
};
const loggedInUser = {
    name:'maxmelliam',
    age: 32,
    isAdmin:'true'
};
for (const propertyName in loggedInUser ) {
console.log(propertyName);
console.log(loggedInUser[propertyName])
}
let isFinished = false;
while (!isFinished) {
   isFinished = confirm('do you want to quet?');
}
console.log('done');