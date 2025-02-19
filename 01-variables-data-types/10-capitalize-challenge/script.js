// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

//homework capitalize letter
let myHomework;
let myHomework1;
let myHomework2;
let myHomework3;


const homework = 'developer';
myHomework = homework.toUpperCase();
myHomework = myHomework[0] + homework.slice(1);

myHomework1 = homework[0].toUpperCase() + homework.slice(1);

myHomework2 = `${homework[0].toUpperCase()}${homework.slice(1)}`


console.log(myHomework2);