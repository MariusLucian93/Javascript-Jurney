const human = {
    name: 'Andreea Raluca Tudorache',
    age: 34,
    sex: 'F',
    children: false,
    adress: {
        street: 'Octavian Goga',
        number: '116M',
        city: 'Bucharest'
    },
    hobbies: ['jogging', 'swimming', 'dancing']
};
human.hasVehicle = true;

human.hello = function () {
    console.log(`Hello this is ${this.name}, and i work at Accenture`)   
};
human.hello();

let x;
x = human;

const person = {
    'first name': 'jack wilder',
    'last name': 'who knows'
};

x = person['first name'];

console.log(x)