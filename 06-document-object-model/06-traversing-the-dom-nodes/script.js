let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].style.color = 'gold';
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[0].textContent = 'Yolo';

const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentNode.style.background = 'green';
output = child.parentNode.style.padding = '5px';

//siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.style.color = 'red';

output = secondItem.previousSibling;
output = secondItem.nextSibling;

console.log(output)
