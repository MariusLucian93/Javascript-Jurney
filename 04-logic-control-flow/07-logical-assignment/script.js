// || assigns the right side value only if the left is a falsy
let a = false;

// if (!a) {
//     a = 10;
// };
 
// a = a || 10;

a ||= 10;

console.log(a);


// && assigns the right side only if the left is a truthy

let b = 10;

// if (b) {
//     b = 20;
// }

// b = b && 30;

b &&= 40

console.log(b);


// ?? assigns the right side only if the left is undefined or null

let c = 0;

if (c === null || c === undefined) {
    c = 30;
}

console.log(c);