// 03-feedback.js
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

// Функція для зберігання стану форми у локальному сховищі
function saveToLocalStorage() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Функція для заповнення полів форми зі збереженого стану
function loadFromLocalStorage() {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
}

// Виклик функції для завантаження даних зі сховища після завантаження сторінки
loadFromLocalStorage();

// Виклик функції для збереження даних в сховище при вводі в поля форми
form.addEventListener('input', throttle(saveToLocalStorage, 500));

// Обробник сабміту форми
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Очищення сховища
  localStorage.removeItem(STORAGE_KEY);

  // Виведення даних у консоль
  console.log('Form Data:', state);

  // Очищення полів форми
  emailInput.value = '';
  messageInput.value = '';
});

