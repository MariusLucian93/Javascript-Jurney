const x = 199;

console.log (x, 'x In global scope')


function run () {
    y = 1;
    console.log(x, 'in local scope');
    return (x + y);
}

if (true) {
    console.log(x, 'in block')
}

function add () {
    let x = 200;
    let y = 1;
    console.log(x + y, 'local x not from the global')
}
add();

console.log(run());