for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('buzz');
    } 
    else if (i % 5 == 0) {
        console.log('fizz');
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    } else {
        console.log(i);
    }
}

console.log('try like teacher')

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
    	console.log("FizzBuzz");
    } else if (i % 3 == 0) {
    	console.log("Fizz");
    } else if (i % 5 == 0) {
    	console.log("Buzz");
    } else {
    	console.log(i);
    }
}