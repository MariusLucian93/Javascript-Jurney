//get child and parrent elements
let output;
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1];

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'yellow';
parent.children[0].style.color = 'red';
parent.children[2].style.color = 'blue';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '15px solid #FFFFFF';
child.parentElement.style.padding = '15px';


//sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.previousElementSibling.style.color = 'orange';

console.log(output);