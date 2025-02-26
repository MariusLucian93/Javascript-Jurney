try {
    console.log(x);
} catch(error) {
    console.log('Error: ' + error);
}


// console.log(x);\


function calculate (number) {
    if(isNaN(number)) {
        throw new Error(`${number} is not a number!`);
    }
    return number + 5;
}

try {
    const y = calculate('potato');
    console.log(y);
} catch(error) {
    console.log(error);
}
