const post = {
    id: 1,
    post: 'post one',
    body: 'the first body of post'
};


//conver json to a string
const str = JSON.stringify(post);

//parse json
const obj = JSON.parse(str);


const posts = [
    {
        id: 1,
        post: 'post one',
        body: 'the first body of post'
    },
    {
        id: 2,
        post: 'post two',
        body: 'the first body of post'
    },
    {
        id: 3,
        post: 'post three',
        body: 'the first body of post'
    }
];

const str2 = JSON.stringify(posts);
const obj2 = JSON.parse(str2);


console.log(obj2[0].body)