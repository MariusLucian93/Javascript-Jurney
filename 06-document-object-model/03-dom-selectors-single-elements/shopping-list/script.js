//get element by id

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));


//set attribute

document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');


const title = document.getElementById('app-title');
console.log(title);

//get/change content
console.log(title.textContent);
title.textContent = 'Hello Andreea, Te iubesc';
title.innerText = 'Tot Te iubesc, Andreea!';
title.innerHTML = '<strong> Cumparaturi <strong>';

//change style
title.style.color = 'yellow';
title.style.backgroundColor = 'green';
title.style.padding = '10px';
title.style.borderRadius = '10px'; 

//document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondElement = document.querySelector('li:nth-child(2)');
secondElement.style.color = 'orange';
secondElement.innerText = 'Orange';


//use method on other elements:
const list = document.querySelector('ul');
console.log(list);

let list1 = list.querySelector('li:nth-child(1)');
list1.style.color = 'red';

let list2 = list.querySelector('li:nth-child(3)');
list2.style.color = 'blue';
list2.innertext = '<strong> Oreo <strong>';

let list3 = list.querySelector('li:nth-child(4)');
list3.style.color = 'white';


// console.log(document.querySelector('#item-form'));
let buttons = document.querySelector('#item-form');
console.log(buttons[1]);
buttons[1].style.color = 'yellow';
