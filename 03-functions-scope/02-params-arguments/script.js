function registerUser (user) {
    if (typeof user != 'string')
    {
        return user + ' is not a valid user';
    }
    else
    {
        return user + ' is registered';    
    };
};

//default aprams
function isRegister (user = 'Bot') {
    return user + ' is registered';
};


//Rest params
function restParam (...numbers) {
    let total = 0;
    for (const num of numbers)
    {
        total += num;
    }

    return total;
}


//object as params
function userLogin (user) {
    return `The user ${user.name} with the id ${user.id} is logged in`;
}

const user = {
    name: 'Marius',
    id: 51
}


//arrays as param 
// we can also transofrm the param into ...rest and will create an array automatically
function arraysParam (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const value = arr[randomIndex];
    console.log(value);
}

arraysParam([1, 2, 3, 4, 5, 22])

console.log(isRegister())
console.log(registerUser('marius'))
console.log(restParam(1, 2, 3, 4, 5, 6));
console.log(userLogin(user))

//object as param another way
console.log(userLogin({
    name: 'mihai',
    id: 553
}))


