let start;
let done = false;
const img = document.querySelector('img');


function step (timestamp) {
    if (start === undefined) {
        start = timestamp;
    }

    const elapse = timestamp - start;
    
    if (elapse > 5000) {
        done = true;
    }

    if (done === true) {
        return;
    }
    
    img.style.transform = `translateX(${elapse / 15}px) rotate(${elapse / 10}deg)`


    requestAnimationFrame(step);
}


requestAnimationFrame(step);