function renderGallery(data) {
  return data
    .map(
      ({ title, description, preview, rating }) => `<li
      class="card-container"
      style="background-image: linear-gradient(1deg,rgba(5, 5, 5, 0.6),rgba(5, 5, 5, 0)),
      url(${preview});">
        <svg class="like-icon" width="22" height="22">
          <use href="./img/icons.svg#heart"></use>
        </svg>
      <div class="card-info">
        <h3 class="card-header">${title}</h3>
        <p class="card-description">
          ${description}
        </p>
        <div class="card-footer">
          <div class="card-rate">
            <span class="card-rate-value">${rating.toFixed(1)}</span>
            <div class="card-rate-stars">
              <svg class=${
                rating.toFixed(1) >= 1 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class=${
                rating.toFixed(1) >= 2 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class=${
                rating.toFixed(1) >= 3 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class=${
                rating.toFixed(1) >= 4 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class=${
                rating.toFixed(1) >= 5 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="./img/icons.svg#star"></use>
              </svg>
            </div>
          </div>
          <button class="card-footer-btn">See recipe</button>
        </div>
      </div>
    </li>`
    )
    .join('');
}

function renderPopular(data) {
  return data.map(item => `<!-- Розмітка лішки популярних -->`).join('');
}

function renderOptions(data) {
  return data.map(item => `<!-- Розмітка кнопки категорії -->`).join('');
}

function renderEvents() {
  return data.map(item => `<!-- Розмітка івенту в герої -->`).join('');
}

export { renderGallery, renderPopular, renderOptions, renderEvents };
