const video = document.querySelector('.myVideo');
const videoContainer = document.querySelector('.video-container');

const overlay = document.createElement('div');
overlay.classList.add('overlay');

videoContainer.appendChild(overlay);

video.addEventListener('play', () => {
  overlay.style.display = 'none';
});

video.addEventListener('pause', () => {
  overlay.style.display = 'block';
});
