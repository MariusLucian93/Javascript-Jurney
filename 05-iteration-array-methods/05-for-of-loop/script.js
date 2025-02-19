

//loop through arrays
let arr = [1, 2, 3, 4, 5];
 for (let numbers of arr) {
    console.log(numbers);
 };

 let users = [{name: 'Marius'}, {name: 'Ming'}, {name: 'Gigi'}];

for (let names of users) {
    console.log(names.name);
};


//loop through strings
let str = 'Marius Calin Lucian';

for (const letter of str) {
    console.log(letter);
};

//loop over maps
const map = new Map();
map.set('name', 'marius');
map.set('age', '30');

for (const [key, value] of map) {
    console.log(key, value);
}
