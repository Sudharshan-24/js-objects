let user = new Object(); // "object constructor" syntax
let username = {}; // "object literal" syntax

let userDetails = {
  userName: "John Smith",
  userAge: 30,
};
console.log(userDetails);
console.log(userDetails.userName);

// deleted the userAge key and value
delete userDetails.userAge;
console.log(userDetails);

// added the isAdmin key and value
userDetails.isAdmin = true;
console.log(userDetails);

// use multiword property names, but then they must be quoted
// For multiword properties, the dot access doesn’t work:
// note: use bracket notation instead of dot notation to add multiword key value
// The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).
userDetails["likes cats"] = false;
console.log(userDetails);

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable
// below line the key "like dogs" in 'key' expression or a variable
let key = "likes dogs";
// use bracket notation to get output 'likes dogs': true
// if we use dot notation the output will be "key: true"
// sets the value as "true" for the 'key' variable which holds "likes dogs" (key) value
userDetails[key] = true;
console.log(userDetails);

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// let fruit = prompt("Which fruit to buy?", "banana");
// let bag = {
//   [fruit]: 6,
// };
// console.log(bag.banana);

// Property value shorthand
function makeUser(name, age) {
  return {
    name: name, // we can also use name: this.name; and age: this.age;
    age: age,
  };
}
let userMake = makeUser("Jane", 28);
console.log(userMake.name);

// shorthand property value
function personDetails(name, age) {
  return {
    name,
    age,
  };
}
let person = personDetails("John Doe", 28);
console.log(person.name);
console.log(person.age);

// Using “in” operator
// syntax: "key" in object
let testUser = {
  name: "Test",
  isAdmin: false,
};
// note: The left side of "in" there must be a property name. That’s usually a quoted string.
console.log("name" in testUser);
console.log("isActive" in testUser);

// If we omit quotes, that means a variable should contain the actual name to be tested
let testUser3 = { age: 30 };
let checkKey = "age";
console.log(checkKey in testUser3);
// -------------------------------------------------------------------- //
let testUser2 = {
  name: "Test 2",
  // isAdmin: false,
};
let checkUser = testUser2;
console.log("name" in checkUser);
console.log("isActive" in checkUser);

// for in loop -- iterate over an object
let demo = {
  demoName: "Demo",
  demoIsActive: false,
};
for (let demos in demo) {
  console.log(demos);
}

let demoUser = {
  name: "John",
  surname: "Smith",
};
demoUser.age = 25;
for (let prop in demoUser) {
  console.log(prop);
}

// Task 1:
let taskUser = {};
taskUser.name = "John";
taskUser.surname = "Smith";
taskUser.name = "Pete";
delete taskUser.name;
console.log(taskUser);

// Task 2:
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty());

// Task 3:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let amount = 0;
for (let sal in salaries) {
  amount += salaries[sal];
}
console.log(amount);

// Task 4:
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu.width);
console.log(menu.height);
console.log(menu.title);
