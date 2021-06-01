/*console.log("Hello World");
console.error("This is and error");
console.warn("this is a warning");*/

//let and const
console.log("LET and CONST");
let hisAge = 27;
hisAge = 28;
//let can be reassigned
console.log(hisAge);

const teeth = 32;
//teeth = 26; gives an error
console.log(teeth);
//Always use const, unless you know you will reassign the value -> code is more secure, less prone to errors;

//data types: strings, numbers, boolean, null, undefined, symbol(not for today)
console.log("DATA TYPES");
const name = "John"; //string
const age = 30; //number
const rating = 4.5; //decimal number
const isCool = true; //boolean
const x = null; //null
const y = undefined; //undefined
let z; //undefined

console.log("TYPE of VARIABLE");

console.log(typeof isCool); //find the type of the variable

console.log("CONCATENATION");
//concatenation
console.log("1. My name is " + name + " and I am " + age); //old way
//template string
console.log(`2. My name is ${name} and I am ${age}`); //new way
//or
const hello = `3. My name is ${name} and I am ${age}`;
console.log(hello);

//Methods
console.log("METHODS");
const s = "Hello world!";
console.log(s.length);
console.log(s.toUpperCase()); //this is a method - it is a function associated with an object
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split("")); // by letter - >get an array with 12 values

const b = "technology, it, code, computers";
console.log(b.split(", ")); //by word between commas

//Arrays - variables that hold multiple values;
console.log("ARRAYS and EMBEDED OBJECT");
const numbers = new Array(1, 2, 3, 4, 5); //'new' means we are constructing an array
console.log(numbers);

const fruits = ["apples", "oranges", "pears", "10", "true"]; //can be different types, can't be reassigned
fruits[3] = "grapes"; //we add to const array, but we can't rewrite it
//sometimes you don't know how many values are there but want to add something
fruits.push("mangos"); //adds to the end
fruits.unshift("strawberries"); //adds to the beginning
fruits.push("pineapples");
fruits.pop(); //deletes the last
console.log(fruits);
console.log(fruits.indexOf("pears"));
console.log(Array.isArray(fruits)); //to check if it is an array

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["movies", "music", "sports"], //array
  address: {
    //embeded onbject
    street: "1428 Elm Street",
    city: "Boston",
    state: "MA",
  },
};
console.log(person.lastName, person.age);
console.log(person.hobbies[1]);
console.log(person.address.street);

person.email = "john@gmail.com";
console.log(person);

//deconstruct array, pulling it out into a string
console.log("DECONSTRUCT ARRAY");
const {
  firstName,
  lastName,
  address: { state },
} = person;
console.log(firstName);
console.log(state);

//arrays of objects
console.log("ARRAYS OF OBJECTS");
const todo = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
];
console.log(todo[1].text); //(const name, object number, property)

//jason - data format, used to send data to a server usually in jason, receive as well
console.log("JASON");
const todoJson = JSON.stringify(todo);
console.log(todoJson);

//LOOPS
console.log("LOOPS");
console.log("FOR");
//for runs until condition is true;(examples from Programming with Mosh - JavaScript Loops)
//(assignment of the variable, condition that needs to be met, increment expression - happening action)
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i); // goes and displays from 0 to 4 - 5 in total
}

for (let i = 1; i <= 5; i++) {
  console.log("Howdy!", i); //goes and displays from 1 to 5 - 5 in total
}

for (let i = 1; i <= 6; i++) {
  //to display only ODD numbers
  if (i % 2 !== 0) console.log(i);
}
for (let i = 1; i <= 6; i++) {
  //to display only EVEN numbers
  if (i % 2 == 0) console.log(i);
}
//another way to do the same
for (let i = 6; i >= 1; i--) {
  //decrement
  //to display only ODD numbers
  if (i % 2 !== 0) console.log(i);
}

//while
console.log("WHILE");
let q = 10;
while (q < 20) {
  console.log("Holy Molly", q);
  q++;
}

//how to LOOP through ARRAYS
console.log("LOOP THROUGH ARRAYS");
const today = [
  {
    id: 1,
    text: "Make breakfast",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Walk with a dog",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Water plants",
    isCompleted: false,
  },
];

for (let i = 0; i < today.length; i++) {
  // displays the agenda
  console.log(today[i].text);
}
console.log("FOR OF");
//for of - is a better way to loop through array
for (let todo of today) {
  console.log(todo.text); //todo.id will give number
}

//High order array methods
//forEach -  loops through
console.log("FOR EACH");
const song = [
  {
    id: 1,
    text: "chorus",
    isCompleted: true,
  },
  {
    id: 2,
    text: "bridge",
    isCompleted: true,
  },
  {
    id: 3,
    text: "verse",
    isCompleted: false,
  },
];

song.forEach(function (song) {
  console.log(song.text);
});

//map - allow to create new array from an array
console.log("MAP");
const portrait = [
  {
    id: 1,
    text: "nose",
    isCompleted: true,
  },
  {
    id: 2,
    text: "eyes",
    isCompleted: true,
  },
  {
    id: 3,
    text: "horns",
    isCompleted: false,
  },
];

const portraitText = portrait.map(function (portrait) {
  return portrait.text;
});
console.log(portraitText);

//filter - create new array based on a condition
console.log("FILTER");
const homework = [
  {
    id: 1,
    text: "algebra",
    isCompleted: true,
  },
  {
    id: 2,
    text: "biology",
    isCompleted: true,
  },
  {
    id: 3,
    text: "literature",
    isCompleted: false,
  },
];
const homeworkCompleted = homework.filter(function (homework) {
  return homework.isCompleted === true;
});
console.log(homeworkCompleted);
/* this to see the text, not objects

const homeworkCompleted = homework
  .filter(function (homework) {
    return homework.isCompleted === true;
  })
  .map(function (homework) {
    return homework.text;
  });

console.log(homeworkCompleted);*/

//Conditionals
console.log("CONDITIONALS");

const a = 10;
if (a == 10) {
  console.log("number is 10");
}
const c = "10";
if (c == 10) {
  console.log("string is 10");
}

const d = 20;
if (d === 10) {
  //strict equalty
  console.log("d is 10");
} else {
  console.log("d is not 10");
}

const e = 6;
if (e === 10) {
  //strict equalty
  console.log("e is 10");
} else if (e > 10) {
  console.log("e is greater than 10");
} else {
  console.log(" e is smaller than 10");
}

const f = 4;
const h = 11;
if (f > 10 || h > 10) {
  // '||' means 'OR'
  console.log("f is more than 5 or h is more than 10");
}

const j = 6;
const k = 11;
if (j > 5 && k > 10) {
  // '&&' means 'AND'
  console.log("j is more than 5 and k is more than 10");
}

const l = 10;
// '?' means "THAN" and ":" means "else".
const color = l > 10 ? "red" : "blue";
console.log(color);

//Swicthes
console.log("SWICTHES");

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not read or blue"); //now if I change colors to another, the switch will happen
    break;
}

//FUNCTIONS
console.log("FUNCTIONS");

function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNums(4, 3));
//or '=>' means 'DO THAT' called 'fat arrow'
const minNums = (num1 = 1, num2 = 1) => num1 - num2;
console.log(minNums(8, 5));

const multNums = (num1) => num1 * 8;
console.log(multNums(5));

song.forEach((song) => console.log(song));

59.30 Object oriented programming
