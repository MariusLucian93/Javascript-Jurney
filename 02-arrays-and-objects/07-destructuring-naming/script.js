let x;

const firstName = 'marius';
const lastName = 'Calin';
const age = 32;

const human = {
    firstName,
    lastName,
    age
};
x = human;

human.id = 15;

//destructuring

const person = {
    names: 'matei',
    sex: '0',
    agey: 33,
    profession: {
        day: 'footballer',
        night: 'poacher'
    }
};
const {names, sex: personSex, agey, profession: {day}} = person;
x = person;


//destructuring arrays
const numbers = [10, 20, 21, 25, 26, 224];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);