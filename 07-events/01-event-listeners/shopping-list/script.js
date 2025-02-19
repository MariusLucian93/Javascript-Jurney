const clearButton = document.querySelector('#clear');

function deleteList () {
    const lists = document.querySelector('ul');
    const lists2 = lists.querySelectorAll("li");

    lists2.forEach(element => {
        element.remove();
    });

    // while (lists.firstChild) {
    //     lists.removeChild(lists.firstChild);
    // }
}
clearButton.addEventListener('click', deleteList());
//javascript event listener

//1st way is insterting the button into the html (not recommand at all);


//2nd way of doing it:
// clearButton.onclick = function () {
//     alert('CLEAR ITEMS');
// }
// function onClear () {
//     alert('CLEAR ITEMS');
// };

//3rd way recomended by teacher:
//arrow function since its only 1 event:
// clearButton.addEventListener('click', () => alert('CLEAR ITEMS');

//because this next one has separate functions on lick, and not as an event listener, only one is executed, the last one;
// clearButton.onclick = function () {
//     alert('OH NO');
// }
// clearButton.onclick = function () {
//     console.log('Clear Button');
// }

// clearButton.addEventListener('click', onClear);
// setTimeout(() => clearButton.removeEventListener('click', onClear), 5000);
// setTimeout(() => clearButton.click(), 5000);

// clearButton.addEventListener('click', () => console.log('Clear Items!'));