// Отримуємо необхідні елементи DOM
const ratingGroup = document.querySelector('.rating-group');
const starSpans = document.querySelectorAll('.star-span');
const radioInputs = document.querySelectorAll('input[name="fst"]');
const popupModal = document.querySelector('.pop-up-modal');
const popupBackdrop = document.querySelector('.popup-backdrop');
const ratingBtn = document.querySelector('.give-a-rating');
const ratingCloseBtn = document.querySelector('.rate-close-btn');

// відкриття модалки з рейтингом
ratingBtn.addEventListener('click', handlerOpenRating);

function handlerOpenRating() {
  popupModal.classList.add('active');
  popupBackdrop.classList.add('active');
}

// закриття модалки з рейтингом
ratingCloseBtn.addEventListener('click', handlerCloseRating);

function handlerCloseRating() {
  popupModal.classList.remove('active');
  popupBackdrop.classList.remove('active');
}

popupBackdrop.addEventListener('click', handlerCloseRatingBackdrop);

function handlerCloseRatingBackdrop() {
  popupModal.classList.remove('active');
  popupBackdrop.classList.remove('active');
}

// Додаємо обробник подій для елементів input (radio)
radioInputs.forEach(radioInput => {
  radioInput.addEventListener('change', () => {
    const selectedRating = parseFloat(radioInput.value);
    updateRating(selectedRating);
  });
});

// Додаємо обробники подій для миші на зірках
ratingGroup.addEventListener('mouseover', event => {
  if (event.target.tagName === 'LABEL') {
    const rating = parseFloat(event.target.getAttribute('data-rating'));
    highlightStars(rating);
  }
});

ratingGroup.addEventListener('mouseout', () => {
  resetStars();
});

ratingGroup.addEventListener('click', event => {
  if (event.target.tagName === 'LABEL') {
    const rating = parseFloat(event.target.getAttribute('data-rating'));
    setRating(rating);
  }
});

// Функція для підсвічування зірок при наведенні миші
function highlightStars(rating) {
  starSpans.forEach((starSpan, index) => {
    if (index < rating) {
      starSpan.classList.add('highlight');
    } else {
      starSpan.classList.remove('highlight');
    }
  });
}

// Функція для скидання підсвічування зірок
function resetStars() {
  starSpans.forEach(starSpan => {
    starSpan.classList.remove('highlight');
  });
}

// Функція для встановлення оцінки рейтингу
function setRating(rating) {
  radioInputs.forEach(radioInput => {
    if (parseFloat(radioInput.value) <= rating) {
      radioInput.checked = true;
    } else {
      radioInput.checked = false;
    }
  });
}

// Функція для оновлення текстового відображення оцінки
function updateRating(selectedRating) {
  starSpans.forEach(starSpan => {
    starSpan.textContent = selectedRating;
  });
}

// Ініціалізація рейтингу
const initialRating = parseFloat(
  document.querySelector('input[name="fst"]:checked').value
);
updateRating(initialRating);
