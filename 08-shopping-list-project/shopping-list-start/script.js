const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const filter = document.getElementById('filter');
const formButton = itemForm.querySelector('button');
let isEditMode = false;



function displayItems () {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));

    checkList();
}

//adds items in the shopping list
function addItemSubmit (e) {
    e.preventDefault();
    //validate input
    const newItem = itemInput.value;

    if(newItem === '') {
        alert('Please add an item!');
        return;
    } 

    //check for edit mode:
    if(isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    } else {
        if (checkDuplcity(newItem)) {
            alert('That item is Already There!');
            return;
        }
    }

    //adds the items to dom
    addItemToDOM(newItem);
    //adds items to localstorage
    addItemToStorage(newItem);
    //check the li of elements:
    checkList();
}

//adding the items to the DOM:
function addItemToDOM (item) {
        //create list item
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        
        const button = createButton('remove-item btn-link text-red');
        li.appendChild(button);
    
        //add li(item) to the DOM:
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

//simply removes the tem on X
function onClickItem (e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

//check if an item is already in the list so you do not have any doubles:
function checkDuplcity (e) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(e);
}

//when you click on an listed item, it brings it in add for edit, if you want to edit it
function setItemToEdit(e) {
    isEditMode = true;
    itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));
   
    e.classList.add('edit-mode');
    formButton.innerHTML = '<i class ="fa-solid fa-pen"></i> Update Item';
    formButton.style.backgroundColor = 'green'; 
    itemInput.value = e.textContent;
}

//function that allows the button 'X' to remove the item
//added functionality where it asks the user y/n to remove added items
function removeItem (e) {
   if(confirm('Are you sure you want to delete?')) {
    
    //remove item from dom
    e.remove();
   
    //remove item from storage
    removeItemFromStorage(e.textContent);
    }
    checkList();
}

//function remove item from storage:
function removeItemFromStorage (e) {
    let itemsFromStorage = getItemsFromStorage();

    //filter out items to be removed:
    itemsFromStorage = itemsFromStorage.filter((i) => i !== e);


    //re-set to localstorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    console.log(itemsFromStorage);
}

//adds items to local storage
function addItemToStorage (itemz) {
    let itemsFromStorage = getItemsFromStorage();

    //add new item to array:
    itemsFromStorage.push(itemz);

    //convert the JSON string to set to localstorage:
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

//gets the items from local storage
function getItemsFromStorage () {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

//function to enable Clear All items:
function clearAll () {
    if (itemList.removeChild(itemList.firstChild)) {
        if (window.confirm('Are you sure that you want to clear the list?')) {
            while (itemList.firstChild) {
                itemList.removeChild(itemList.firstChild);
            }
        }
    }

    //clear from local storage:
    localStorage.removeItem('items');

    checkList();
} 

//function that uses the filter to sort out listed items
function filterItems (e) {
    const allItems = document.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    
    allItems.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

//function that checks if there are items listed in:
//+shows/hides filter and clear all if no items are listed
function checkList () {
    itemInput.value = '';

    const allItems = document.querySelectorAll('li');
    if (allItems.length === 0) {
        filter.style.display = 'none';
        clearButton.style.display = 'none';
    } else {
        filter.style.display = 'block';
        clearButton.style.display = 'block';    
    }

    formButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formButton.style.backgroundColor = 'black'
    isEditMode = false;

}


//Initialize app function: 
function innit () {    
//event Listeners:
itemForm.addEventListener('submit', addItemSubmit);
itemList.addEventListener('click', onClickItem);
clearButton.addEventListener('click', clearAll);
filter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

//check if there are any items:
checkList();
}

innit();