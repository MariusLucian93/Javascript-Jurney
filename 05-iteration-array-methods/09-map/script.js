let arr = [1, 2, 3, 4, 5];

let doubleArr = arr.map((item) => item * 2);
console.log(doubleArr);


//same with forEach

const doubledArr = [];
arr.forEach((item) => {
    doubledArr.push(item *3);
});

console.log(doubledArr);

// companies exercise
const company = [
    {name: 'Google', category: 'finance', start: '1123', end: '2322'},
    {name: 'Microsoft', category: 'business', start: '2001', end: '2017'},
    {name: 'Amazon', category: 'retail', start: '2003', end: '2022'},
    {name: '5 to go', category: 'finance', start: '2005', end: '2014'},
    {name: 'Delloite', category: 'Socialism', start: '2001', end: '2012'}
]
//create an array with company names
let companyNames = company.map((item) => item.name);
console.log(companyNames);

//create an array with company and category
let companyCategoryName = company.map((item) => {
    return {
        name: item.name,
        category: item.category
    }
});
console.log(companyCategoryName);

//create an array with company name and company years
let companyDate = company.map((item) => {
    return {
        name: item.name,
        date: item.end - item.start
    };
});
console.log(companyDate);

//chain map together 
const squareAndDouble = arr
.map((item) => Math.sqrt(item))
.map((sqrt) => sqrt * 10);

//long version:
console.log(`long version`)
const squareAndDouble2 = arr
.map((item) => {
    return Math.sqrt(item);
})
.map ((sqr) => {
    return sqr * 2;
})
console.log(squareAndDouble2);

//chaining different methods
console.log('different methods of chaining');

let diffMethods = arr
.filter((item) => item % 2 === 0)
.map((double) => double * 2);
console.log(diffMethods)
