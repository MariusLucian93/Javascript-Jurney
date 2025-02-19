//arrow fucntion syntax
const add = (a, b) => {
    return (a + b);
};
console.log(add(5, 10));

//implicit return arrow function
const sub = (a, b) => a - b;
console.log(sub(15, 10));

//shorter syntax for 1 param no more () 
const multiply = n => n * 2;
console.log(multiply(10));

//returning an object
const obj = () => ({
    name: 'mariusake',
    id: 0o7,
    profession: 'killa'
})
console.log(obj());


//example for the future (Callback)
const arr = [1, 2, 3, 4, 5, 6, 7];
//without arrows
arr.forEach(function (n) {
    console.log(n);
});
//arrows version
arr.forEach((n) => console.log(n));
