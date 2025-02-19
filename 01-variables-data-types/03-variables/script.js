// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase



let firstName = 'Marius';
let lastName = 'Calin';

console.log(firstName, lastName)

let age = 50;
console.log(age);

age = 500;
console.log(age);

let score;

score = 10;
if (true)
{
    score++;
}

console.log(score);
console.log(score);

const x = 100;
// x = 200

const array = [1, 2, 3, 4];
console.log(array);
array.push(5, 6, 7, 8);
console.log(array);

// const object
const person = {
    name: "Michael",
};
person.name = "Mihael";
person.email = "whatdoyouknow@gmail.com";
person.dog = "labrador";
console.log(person);


// declare multiple values at once (nu prea imi place stilul
//                                  asta de declaratie in serie)
let a, b, c;

const d = 100, e = 200, f = 300;

console.log(d);
console.log("undefined datatypes: a")
console.log(a);
