let x;

const arr = [0, 1, 3, [7, 8], 15, [22, 25], [33, 36], 1412];

const fruits = [17, 'mango', 'orange'];
const veggi = ['carrot', 'potato', 'lettuce'];
const metal = ['scrap', 'aluminium', 'iron'];
const rock = ['stone', 'granit', 'lime']

// fruits.push(veggi);
// x = fruits[3][2];

const nonLive = [metal, rock]
const allArrays = [fruits, veggi];
const multiple = [nonLive, allArrays];

x = multiple[0][0][1];

x = fruits.concat(veggi, metal, rock);
let j = x.indexOf('mango').toLocaleString();

let z = arr.indexOf(12)

//spread operator
x = [...fruits, ...veggi];

//flatten arrays
x = arr;
x = arr.flat();

//static methods on Array object

x = Array.isArray(fruits);
x = Array.from('12345678910')

const a = 1;
const b = 2;
const c = 15;

x = Array.of(a, b, c);


console.log(x);