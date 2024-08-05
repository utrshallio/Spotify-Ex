document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progressBar = document.getElementById('progress-bar');
    const trackName = document.getElementById('track-name');

    const tracks = ['track1.mp3', 'track2.mp3', 'track3.mp3'];
    let currentTrackIndex = 0;

    function loadTrack(index) {
        audio.src = tracks[index];
        trackName.textContent = `Track ${index + 1}`;
        audio.load();
    }

    function playTrack() {
        audio.play();
        playButton.textContent = 'Pause';
    }

    function pauseTrack() {
        audio.pause();
        playButton.textContent = 'Play';
    }

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            playTrack();
        } else {
            pauseTrack();
        }
    });

    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    audio.addEventListener('timeupdate', () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    // Load the initial track
    loadTrack(currentTrackIndex);
});
