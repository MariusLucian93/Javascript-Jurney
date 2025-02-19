let x;
//array Literal
const numbers = [1, 3, 2, 3, 4, 5];

//array COnstructor
const legumes = new Array('carrots', 'pears', 'vinyl');

x = legumes[0] + numbers[1];
x = legumes[2] + legumes[1];
x = numbers[0] + numbers[1];

x = `My favourite number is ${numbers[3]}, and my
least favourite vegetable is ${legumes[2]}`;

x = numbers.length;

legumes[3] = 'altceva';
x = legumes;


console.log(x);