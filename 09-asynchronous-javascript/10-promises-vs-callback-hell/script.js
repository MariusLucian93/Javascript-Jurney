function getData(endpoint) {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
  


    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };
  
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}



//callback hell!: 
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     });
//   });
// });


getData('./movies.json')
.then((movies) => {
  console.log(movies);
  return getData('./actors.json')
})
.then((actors) => {
  console.log(actors);
  const names = actors.map(actor => actor.name);
  return names;
})
.then ((names) => {
  console.log(names)
  return getData('./direct2ors.json')
})
.then ((directors) => console.log(directors))
.catch((error) => console.log(error));