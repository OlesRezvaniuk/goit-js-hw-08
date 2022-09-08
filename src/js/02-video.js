import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
// Отримуємо доступ до елемента
const player = document.querySelector('#vimeo-player');
const videoPlayer = new Player(player);

videoPlayer.on('timeupdate', throttle(savePlayedTime, 1000), { passive: true });
// Підключаєм опції vimeо, відбираєм поточний часля запису в локальне сховище
function savePlayedTime() {
  videoPlayer.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}
// При перезагрузці сторінки поточний час береться із локального сховища
videoPlayer.setCurrentTime(
  localStorage.getItem('videoplayer-current-time') || 0
);
// Виводим час у консоль
console.log(localStorage);
