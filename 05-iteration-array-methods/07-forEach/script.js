const names = ['maria', 'marius', 'mihai', 'mane'];

names.forEach(function (item) {
    console.log(item);
});
console.log(" ");

names.forEach((index, item, arr) => console.log(`${index} - ${item}`, arr));
console.log(" ");

function logSocials(social) {
    console.log(social);
};

names.forEach(logSocials);

const arrObj = [{name: 'tazmania', id: 55}, {name: 'romania', id: 551}, {name: 'lituania', id: 11}, {name: 'whoknows', id: 0}];

arrObj.forEach(item => console.log(item.name, item.id));