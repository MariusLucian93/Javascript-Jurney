const arr = [0, 1, 3, 15, 1412, 12, -11];
let x;

// //add elements at the end of an array
// arr.push(100);

// //removes elements from the end of the array
// arr.pop();

// //adds elements at the begginig of the array
// arr.unshift(1001);

// //removes elements at the begginig of the array
// arr.shift();

// //reverses the array
// arr.reverse();

//testing some motre prototypes
x = arr.includes(0);
x = arr.indexOf(105);

x = arr.slice(1, 5);
// x = arr.splice(4, 1);
// x = arr.splice(5, 1);

//chain multiple methods
x = arr.splice(0, 5).reverse().toString().charAt();

console.log(x, arr)