const names = ['Marius', 'Magdalena', 'Andreea', 'Cotofana', 'Leustean', 'Matei', 'Ion', 'Catalinescu'];

let result = names.filter(function (item) {
    return item.length > 8;
});

//short  version
const results = names.filter(item => item.length > 8);

//with forEach
let results1 = [];
names.forEach((item) => {
    if (item.length > 5) {
        results1.push(item);
    }
})

const company = [
    {name: 'Company one', category: 'finance', start: '1123', end: '2322'},
    {name: 'Company two', category: 'business', start: '2001', end: '2017'},
    {name: 'Company three', category: 'retail', start: '2003', end: '2022'},
    {name: 'Company for', category: 'finance', start: '2005', end: '2014'},
    {name: 'Company five', category: 'Socialism', start: '2001', end: '2012'}
]

//companies that has a specific practice
let specificCompany = company.filter(item => item.category === 'finance');

//companies start
let companyStart = company.filter(item => item.start == 2001);

//companies name
let companyName = company.filter(item => item.name.length > 11);

console.log(companyName);