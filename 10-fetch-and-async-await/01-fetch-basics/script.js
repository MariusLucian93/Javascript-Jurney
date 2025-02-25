// fetch('./movies.json')
// .then((res) => {
//         return res.json();
// })
// .then ((data) => {
//      console.log(data);
// })


//cleaner method without the braces
//json fetch method
fetch('./movies.json')
.then((res) =>  res.json())
.then ((data) => console.log(data));


//text fetch method
fetch('./test.txt')
.then((res) => res.text())
.then((data) => console.log(data));


//fetch from an API
fetch('https://api.github.com/users/MariusLucian93')
.then((res) =>  res.json())
.then ((data) => { console.log(data);
    // const getLocation = data.location;
    // const getName = data.name;
    // const getID = data.id;

    // console.log(getLocation, getName, getID);    
})
