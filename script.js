let songs = [
    {
        title: "Relaxing Piano",
        file: "music/song1.mp3",
        cover: "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
    },
    {
        title: "Lo-fi Chill",
        file: "music/song2.mp3",
        cover: "https://images.pexels.com/photos/713056/pexels-photo-713056.jpeg"
    },
    {
        title: "Romantic Violin",
        file: "music/song3.mp3",
        cover: "https://images.pexels.com/photos/210854/pexels-photo-210854.jpeg"
    }
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let cover = document.getElementById("cover");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playBtn");

function loadSong(i) {
    title.innerText = songs[i].title;
    audio.src = songs[i].file;
    cover.src = songs[i].cover;
}
loadSong(index);

function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    progress.max = audio.duration;
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.innerText = "⏸";
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.innerText = "⏸";
}
