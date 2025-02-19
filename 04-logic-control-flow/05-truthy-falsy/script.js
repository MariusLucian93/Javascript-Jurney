const email = 'mariuscalin93@gmail.com';

if (email) {
    console.log('the email is', Boolean(email));
}

//truthy values
/*
everything that is not falsy
- true
- '0' (string zero)
- ' ' or " " (space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function () {} (empty function)
*/

//falsy values
/*
- false
- 0
- '' or "" (empty strings)
- null
- undefined
- NaN
*/

let x = [];

console.log(Boolean(x));

//truthy and falsy caveats
const children = 0;

//if you just add children, when u add 0, it wont run, because it sees 0 as false
if (children != NaN) {
    console.log(`You have ${children} children`);
};

//check for empty arrays
if (x > 0) {
    console.log(`The array of ${x} is not empty`);
}

//check for empty objects
const person = {
    // name: 'mihai',
    // id: 22,
    // job: true
}
if (Object.keys(person).length > 0) {
    console.log(`It is a person`);
} else {
    console.log (`not a person!`)
}


//loose equality
console.log(false == 0); // '===' checks the type equality, will result in false
console.log('' == 0);
console.log(null == undefined);