let x;

const obj = {};
obj.id = 1;
obj.name = 'player';
obj.team= 'none';

const something = {
    name: {
        both: {
            first: 'marius',
            last: 'lucian'
        }
    }
}

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2}; //spread operator
const obj4 = Object.assign({}, obj1, obj2); //syntax


const todo = [
    {id: 1, name: 'play videogames'},
    {id: 2, name: 'buy water'},
    {id: 3, name: 'take a nap'}
];



x = todo[0].name;
x = Object.keys(obj);

x = Object.keys(obj).length;

x = Object.values(obj);

x = Object.entries(obj);

x = obj.hasOwnProperty('ce')

console.log(x);