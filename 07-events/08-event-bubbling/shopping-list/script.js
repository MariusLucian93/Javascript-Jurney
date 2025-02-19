const formButton = document.querySelector('form button');
const div = document.getElementsByClassName('form-control');
const form = document.getElementById('item-form');
const body = document.querySelector('body');

function eventStart (e) {
    e.preventDefault();
    alert('BUtton was pushed');
    console.log('BUtton was pushed');
    e.stopPropagation();
}
function eventStart2 (e) {
    e.preventDefault();
    alert('div was pushed');
    console.log('div was pushed');
}
function eventStart3 (e) {
    e.preventDefault();
    alert('form was pushed');
    console.log('form was pushed');
}
function eventStart4 (e) {
    e.preventDefault();
    alert('body was pushed');
    console.log('body was pushed');
}


formButton.addEventListener('click', eventStart);
div[1].addEventListener('click', eventStart2);
form.addEventListener('click', eventStart3);
body.addEventListener('click', eventStart4);


