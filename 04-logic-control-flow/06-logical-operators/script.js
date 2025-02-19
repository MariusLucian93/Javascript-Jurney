// && and will return the first falsy value or the last one
let x;
x = 10 && 20 && 30 && 40;
// x = 10 && 20 && 30 && 0 && 40; 0 in this case
console.log(x);

//check for empty strings
x = [];
console.log(x[0]); //like this it shows as undefined
x.length > 0 && console.log(x[0]); //this will not be printed


// || or will return the first truthy value or the last one 
let y;
y = 10 || 20;
y = 5 || 15;
// y = 500 || 55;
// y = 0 || 555;
// y = 0 || null || '';
console.log(y);

// ?? will return the right side operand when the left is null or undefined
let z;
z = null ?? 55;
console.log(z);

z = undefined ?? 59599;
console.log(z);


z = 0 ?? 55;
console.log(z);