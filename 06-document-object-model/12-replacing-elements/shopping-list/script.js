function replaceFirstItem() {
    const firstItem = document.querySelector('li');

    const li = document.createElement('li');
    li.textContent = 'Replace first';

    firstItem.replaceWith(li);
}

function replaceSecondItem() {
    const secondItem = document.querySelector("li:nth-child(2)");

    secondItem.outerHTML = '<li>Replace Second Item</li>';
};

function replaceAllItems() {
    const list = document.querySelectorAll('li');

    list.forEach((item, index) => (item.outerHTML = index === 1 ? '<li>Replaced second</li>' : '<li>Replaced</li>'))
}

function replaceChildHeader() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shipping List';
    header.replaceChild(h2, h1);
}

replaceSecondItem();
replaceFirstItem();
replaceAllItems();
replaceChildHeader();