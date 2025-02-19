const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
    //classname
    // console.log(itemList.className);
    // text.className = 'card dark';

    //classlist
    // console.log(itemList.classList);
    // itemList.classList.forEach((c) => console.log(c));
    // text.classList.add('dark');
    // text.classList.remove('card');
    // itemList.classList.add('card');

    // text.classList.toggle('hidden');
    // text.classList.remove('card', 'dark');

    //change style

    itemList.style.lineHeight = '2';

    items.forEach((item, index) => {
        item.style.color = 'white';

        if (index === 0){
            item.style.color = 'red';
        } else if (index === 1){
            item.style.color = 'yellow';
        } else if (index === 2){
            item.style.color = "blue";
        }
    })
};


document.querySelector('button').onclick = run;