import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const player = document.querySelector('#vimeo-player');
const videoPlayer = new Player(player);

videoPlayer.on('timeupdate', throttle(savePlayedTime, 1000), { passive: true });

function savePlayedTime() {
  videoPlayer.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

videoPlayer.setCurrentTime(
  localStorage.getItem('videoplayer-current-time') || 0
);
