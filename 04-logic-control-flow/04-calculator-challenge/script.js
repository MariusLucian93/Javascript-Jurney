function calculator (param1, param2, operator) {
    switch(operator) {
        case '+':
            console.log(param1 + param2);
            break;
        case '-':
            console.log(param1 - param2);
            break;
        case '*':
            console.log(param1 * param2);
            break;
        case '/':
            console.log(param1 / param2);
            break;
        default:
            console.log('INVALID')
    }
}

calculator(5, 2, '+');