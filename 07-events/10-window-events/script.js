// window.onload = function () {
//     document..textContent = 'Buna ziua!';    
// }

window.addEventListener('load', () => {
   console.log('LOAD has loaded')
})

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has loaded');
})


window.document.querySelector('h1').textContent = 'WOAA BLOODY';


window.addEventListener('resize', () => {
   document.querySelector('h1').innerText = `Resized to x:${window.innerWidth} and y:${window.innerHeight}`;  
})


window.addEventListener('scroll', () => {
    console.log(`scroll x:${window.scrollX} and y:${window.scrollY}`);

    if (window.scrollY > 50) {
        document.body.style.background = "red";
    }
})