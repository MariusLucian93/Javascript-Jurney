const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


function onInput (e) {
    heading.textContent = e.target.value;
}

function onCheck (e) {
const isChecked = e.target.checked;
heading.textContent = isChecked ? 'Checked' : 'Unchecked';
}

function onFocus () {
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'blue';
    itemInput.style.color = 'Green';
}

function onBlur () {
    itemInput.style.outlineStyle = 'none';
}


itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);