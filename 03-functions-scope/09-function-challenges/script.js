const getCelcius = (farenheit) => (farenheit - 32) * 5 / 9;
console.log(`The temperature is ${getCelcius(32)}\xB0C`);


//exercise two:
const minMax = (...arr) => console.log(`min: ${Math.min(...arr)}, max: ${Math.max(...arr)}`); 
minMax(1, 2, 3, 4, 5);

//exercise three:
(function (width, length) {
    console.log(`The area of a rectangle with
    the with of ${width} and the length 
    of ${length} is ${width * length}`)
})(10, 20);