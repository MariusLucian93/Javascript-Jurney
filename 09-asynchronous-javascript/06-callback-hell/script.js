function getData (param, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', param);

    //takung a cb as an argument using it for nesting multiple cbs
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            cb(JSON.parse(this.responseText));
        }
    }
    
    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}


//callback hell, nesting multiple callbacks withing eachother
getData('./movies.json', (data) => {
    console.log(data);
    getData('./actors.json', (data) => {
        console.log(data);
        getData('./directors.json', (data) => {
            console.log(data);
        })
    })
});
