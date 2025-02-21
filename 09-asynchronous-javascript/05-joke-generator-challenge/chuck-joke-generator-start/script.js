const getApi = new XMLHttpRequest();
const joke = document.getElementById('joke');
const button = document.getElementById('joke-btn');

// getApi.open('GET', 'https://api.chucknorris.io/jokes/random');


button.style.background = 'red';



getApi.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
    
        joke.innerText = `${data.value}`;

    }
}


button.addEventListener('click', getAnotherJoke);

function getAnotherJoke () {
    getApi.open('GET', 'https://api.chucknorris.io/jokes/random');
    getApi.send();
}

// getApi.send();