//querySelectorAll();

const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

// let button = document.querySelector('.btn');
// button.style.color = 'blue';
// console.log(button);

// listItems.style.color = 'red'; => does not work on node list

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 0) {
//         item.remove();
//     }
//     if (index === 1) {
//         item.innerHTML = `Dracula
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//     }
// });

const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach(item => {
    console.log(item.innerText);
});


//get ele by tag
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[2].innerText);