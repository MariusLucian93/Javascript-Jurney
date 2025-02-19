let x;
const name = 'Andreea';
const age = 34;


//old way before 2016
x = 'Hello, i am ' + name + ' and I am ' + age + ' years old';


//Template literals
x = `Hello my name is ${name}, and i am ${age} years old`;


//String Properties and Methods
const string = new String('Ce faceti lume?');
x = string.length;
x = typeof string;

//access value by key
x = string[3];

x = string.__proto__;
x = string.toUpperCase();
x = string.toLowerCase();
x = string.charAt(1);
x = string.indexOf('?')
x = string.substring(0, 15);
x = string.substring(14);
x = string.slice(-15, -10);
x = string.trim();
x = string.replace('faceti', 'dracu');
x = string.includes('dracu');
x = string.valueOf();
x = string.split('')
console.log(x);
