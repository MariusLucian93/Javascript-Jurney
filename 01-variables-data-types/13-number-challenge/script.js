let x;
let y;
let sumOutput;
let differenceOutput;
let productOutput;
let quotientOutput;
let rmOutput;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sumOutput = x + " + " + y + " = " + `${x + y}`;
differenceOutput = `${x} - ${y} = ${x - y}`; 
productOutput = `${x} * ${y} = ${x * y}`;
quotientOutput = `${x} / ${y} = ${x / y}`;
rmOutput = `${x} % ${y} = ${x % y}`

console.log(sumOutput)
console.log(differenceOutput)
console.log(productOutput)
console.log(quotientOutput)
console.log(rmOutput)