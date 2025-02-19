const age = 19;
 
//using if statment

if (age >= 18) {
    console.log ('You can vote!')
} else {
    console.log ('You can not vote!')
}

//ternary operator
age >= 18 ? console.log('you can vote') : console.log('you can not vote');

//asigning a conditional value to a variable with ternary

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote!';
console.log(canVote2);

//multiple statements: 
const auth = true ;
let redirect;
// if (auth) {
//     alert('WElcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert ('Unauthoreisez')
//     redirect = '/login';
// }

const rdr = auth ? (alert('welcome to the dashboard'), '/dashboard') : (alert ('Access denied'), '/login');
console.log(rdr);


auth ? console.log('You are authorisez') : null;

auth && console.log('WElcome to the dashboard');