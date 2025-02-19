function removeClearButton () {
   const clear = document.querySelector("#clear");
   clear.remove();
}
removeClearButton();

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:nth-child(1)');

    ul.removeChild(li);
}
// removeFirstItem();

function removeItem(itemnr) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemnr})`);

    ul.removeChild(li);
}
// removeItem(1);

function removeItem2(itemnr) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemnr];

    ul.removeChild(li);
}
removeItem2(1);


function removeItem3(itemnr) {
    li = document.querySelectorAll('li');
    li[itemnr - 1].remove();
}
removeItem3(1);

const removeItem4 = (itemNr) => document.querySelectorAll('li')[itemNr - 1].remove();
removeItem4(2);