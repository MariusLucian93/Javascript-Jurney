// const intervalID = setInterval(myCallBack, 1000, "hello");

// function myCallBack (a) {
//     console.log(a, Date.now());
// }
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let intervalID;

function startChange () {
    if (!intervalID) {
        intervalID = setInterval(changeColor, 1000);
    }
}

function changeColor () {
    if (document.body.style.background !== 'red') {
        document.body.style.background = 'red';
        document.body.style.color = 'yellow';
    } else {
        document.body.style.background = 'yellow';
        document.body.style.color = 'red';
    }
}


function stopChange () {
    clearInterval(intervalID);
}

stopBtn.addEventListener('click', stopChange);
startBtn.addEventListener('click', startChange);