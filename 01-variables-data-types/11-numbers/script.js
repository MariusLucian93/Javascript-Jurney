let x; 

const number = 5;
x = number.toString().length;
x = number.toFixed(3);
x = number.toPrecision(3);
x = number.toExponential(2);

x = number.toLocaleString('ar-EG'); //by default uses arab numbers
x = number.valueOf();
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);

