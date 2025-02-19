const listItems = document.querySelectorAll('li');
const lists = document.querySelector('ul');


// listItems.forEach(item => {
//     item.addEventListener('click', () => {
//         item.style.color = 'red';
//     })    
// });


lists.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI') {
        e.target.remove();
    }
})
lists.addEventListener('mouseover', (e) => {
    if(e.target.tagName == 'LI') {
        e.target.style.color = 'red'
    }
})
lists.addEventListener('mouseout', (e) => {
    if(e.target.tagName == 'LI') {
        e.target.style.color = ''
    }
})

