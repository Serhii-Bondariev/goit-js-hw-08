import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 236203659, // ID відео на Vimeo
});

const TIME_UPDATE_THROTTLE = 1000; // Обмеження в 1 секунду для збереження в локальному сховищі

player.on('timeupdate', throttle(saveCurrentTime, TIME_UPDATE_THROTTLE));

function saveCurrentTime(event) {
  // Отримуємо поточний час відтворення
  const currentTime = event.seconds;

  // Зберігаємо поточний час в локальному сховищі
  localStorage.setItem('videoplayer-current-time', currentTime);
}

// Після завантаження сторінки перевіряємо, чи є збережений час в сховищі
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  // Встановлюємо час відтворення зі збереженої позиції
  player.setCurrentTime(parseFloat(savedTime));

}