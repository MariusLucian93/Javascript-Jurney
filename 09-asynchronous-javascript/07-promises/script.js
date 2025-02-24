const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});


promise.then(() => {
    console.log('promise consumed!');
});


const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        
        if(!error){
            resolve({name: 'John', age: 300});
        } else {
            reject('Error: something went wrong')
        }
    }, 1000);
});


getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('THe promise has been resolved or rejected'));

console.log('Hello from global scope');