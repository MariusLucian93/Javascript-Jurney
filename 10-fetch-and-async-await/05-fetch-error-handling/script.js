// fetch('https://httpstat.us/200')
// .then(res => res)
// .then(() => console.log());


//catch runs on a network error
// fetch('https://httpstat.us/404')
// .then(res => res)
// .then(() => console.log('success'))
// .catch(error => {
//     console.log(error);
// })

fetch('https://httpstat.us/201')
.then(res => {
    if (res.status === 400) {
        throw new Error('Could not be found');
    } else if (res.status === 500) {
        throw new Error('Maybe on another planet');
    } else if (res !== 200) {
        console.log('failed horribly');
    }
    return res;
})
.then(() => console.log())
.catch(error => console.log(error))

