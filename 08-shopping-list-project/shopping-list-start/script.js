const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem (e) {
    e.preventDefault();
    //validate input
    const newItem = itemInput.value;

    if(newItem === '') {
        alert('Va rog adaugati item!');
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

//event Listeners:
itemForm.addEventListener('submit', addItem);