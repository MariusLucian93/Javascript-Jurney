//Values that are stored on the stack
const name = "Andreea";
const age = 34;



//Reference Values that are stored on the heap

const person = {
    name: "Marius",
    age: 32
};


let newName = name;
newName = "Raluca";
console.log(name, newName);

let newPerson = person;
console.log(newPerson, person);

newPerson.name = "Lucian";
console.log(newPerson, person)

console.log(person);