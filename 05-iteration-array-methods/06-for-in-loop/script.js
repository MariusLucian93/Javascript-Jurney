const obj = {
    color1: 'blue',
    color2: 'green', 
    color3: 'yellow',
    color4: 'orange'
};
for (const key in obj) {
    console.log(obj[key]);
}

console.log(' ');

let arr = ['yellow', 'orange', 'green'];
for (const key in arr) {
    console.log(arr[key]);
}