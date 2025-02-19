const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function(acc, cur) {
    return acc + cur;
}, 0 );

//shorter version
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);


//using a for loop
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}


//using it on a shopping cart 
const cart = [
    {name: 'product 1', id: 200, price: 100},
    {name: 'product 2', id: 4, price: 100},
    {name: 'product 3', id: 20, price: 100},
    {name: 'product 4', id: 333, price: 100}
]

const sum4 = cart.reduce((acc, price) => acc + price.price, 0);

console.log(sum4);