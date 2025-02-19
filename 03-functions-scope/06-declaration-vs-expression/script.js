//fucntion declaration
// we can call the function before the declaration
function saveMoney (dollars) {
    return('$' + dollars);
}
console.log(saveMoney(100));



//function expression
//we cannot call it before the expresion
const saveLei = function (lei) {
    return ('lei' + lei); 
};
console.log(saveLei(100));
