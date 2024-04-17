const audio = document.getElementById('audio');
const video = document.getElementById('video');

video.pause();

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

audio.addEventListener('click', toggleAudio);
video.addEventListener('click', toggleVideo);
