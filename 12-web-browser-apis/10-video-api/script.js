const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const curentTime = document.getElementById('current-time');


playBtn.addEventListener('click', playVideo);
pauseBtn.addEventListener('click', pauseVideo);
stopBtn.addEventListener('click', stopVideo)
video.addEventListener('timeupdate', () => (curentTime.innerText = Math.floor(video.currentTime)));



function currentTime () {
    curentTime.innerText = video.currentTime;
} 
function stopVideo () {
    video.pause();
    video.currentTime = 0;

    if (video.currentTime === 0) {
        video.classList.add('media/poster.png');
    }
}
function pauseVideo () {
    video.pause();
}
function playVideo () {
    video.play();
}


console.log(video, playBtn, pauseBtn, stopBtn, curentTime);