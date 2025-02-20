const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');


function addItem (e) {
    e.preventDefault();
    //validate input
    const newItem = itemInput.value;

    if(newItem === '') {
        alert('Please add an item!');
        return;
    } 
    //create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}

//the fucntion that creates the button
function createButton (classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

//add the icon to the buttons
function createIcon (classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

//function that allows the button 'X' to remove the item
function removeItem (e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

//function to enable Clear All items:
function clearAll () {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    console.log('works')
} 

//event Listeners:
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearAll);