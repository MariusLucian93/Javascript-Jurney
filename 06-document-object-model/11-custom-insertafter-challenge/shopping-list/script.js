function insertAfter(newEL, existingEl) {
   existingEl.parentElement.insertBefore(newEL, existingEl.nextSibling);
}


const li = document.querySelector('li');
li.textContent = 'Insert Me After!';

const firstItem = document.querySelector('li:first-child');


insertAfter(li, firstItem);