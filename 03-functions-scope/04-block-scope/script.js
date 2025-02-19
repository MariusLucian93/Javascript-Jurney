let x = 100;
const y = 200;
var z = 300;


function testing () {
    console.log(x + y + z);
}

testing();


if (true) {
    let a = 100;
    const c = 200;
    var d = 300;
}

// console.log(a); does not work since let type variable is scope locked
// console.log(c); does not work since const type variable is scoped locked
//next log will work since var type variable is not scope locked unless its a function scope
console.log(d);

function testing2() {
    var e = 200;
    console.log(x + e)
}

testing();


// console.log(e) will not work even tho is a var type variable, beacuse it sits in a function scope