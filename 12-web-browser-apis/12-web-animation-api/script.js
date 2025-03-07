const ball = document.getElementById('ball');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const speedDown = document.getElementById('slow-down');

const rollAnimation = [
{
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'yellow'
},
{
    color: 'green',
    offset: 0.3
},
{
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: "yellow"
}];


const rollOptions = {
    duration: 3000,
    iterations: Infinity
}

const roll = ball.animate(rollAnimation, rollOptions);



playBtn.addEventListener('click', () => {
    roll.playbackRate = 1;
    roll.play()
});
pauseBtn.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
speedUp.addEventListener('click', () => roll.playbackRate = roll.playbackRate * 2);
speedDown.addEventListener('click', () => roll.playbackRate = roll.playbackRate / 2);
