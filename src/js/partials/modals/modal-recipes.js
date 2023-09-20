import svg from '../../../img/icons.svg';

const modalRefs = {
  titles: document.querySelectorAll('.recipe-modal-title'),
  video: document.querySelector('.video-container'),
  rating: document.querySelectorAll('.modal-rating'),
  stars: document.querySelectorAll('.modal-stars'),
  time: document.querySelectorAll('.time-preparing'),
  tags: document.querySelectorAll('.recipe-modal-tags'),
  ingredients: document.querySelector('.recipe-modal-ingreds'),
  description: document.querySelector('.recipe-text'),
  iframe: document.querySelector('.js-video iframe')
}

loadModal();
async function loadModal(recipe) {
  modalRefs.titles.forEach(title => title.textContent = recipe.title);
  const src = !recipe.youtube
    ? recipe.thumb
    : recipe.youtube.replace('watch?v=', 'embed/');
  
  modalRefs.iframe.setAttribute('src', src);
  modalRefs.time.forEach(item => item.textContent = recipe.time + " mins");

  modalRefs.rating.forEach(item => item.innerHTML = recipe.rating.toFixed(1));
  modalRefs.stars.forEach(block => block.innerHTML = `
    <li class="stars-list-item">
      <svg class="${
                recipe.rating.toFixed(1) >= 1 ? 'modal-star-icon-orange' : 'modal-star-icon-gray'
              }" width="18" height="18">
        <use href="${svg}#star"></use>
      </svg>
    </li>
    <li class="stars-list-item">
      <svg class="${
                recipe.rating.toFixed(1) >= 2 ? 'modal-star-icon-orange' : 'modal-star-icon-gray'
              }" width="18" height="18">
        <use href="${svg}#star"></use>
      </svg>
    </li>
    <li class="stars-list-item">
      <svg class="${
                recipe.rating.toFixed(1) >= 3 ? 'modal-star-icon-orange' : 'modal-star-icon-gray'
              }" width="18" height="18">
        <use href="${svg}#star"></use>
      </svg>
    </li>
    <li class="stars-list-item">
      <svg class="${
                recipe.rating.toFixed(1) >= 4 ? 'modal-star-icon-orange' : 'modal-star-icon-gray'
              }" width="18" height="18">
        <use href="${svg}#star"></use>
      </svg>
    </li>
    <li class="stars-list-item">
      <svg class="${
                recipe.rating.toFixed(1) >= 5 ? 'modal-star-icon-orange' : 'modal-star-icon-gray'
              }" width="18" height="18">
        <use href="${svg}#star"></use>
      </svg>
    </li>
  `);

  modalRefs.tags.forEach(block => block.innerHTML = recipe.tags.map(tag => `
    <li>
      <p class="categiries">#${tag}</p>
    </li>`).join(''))
  
  modalRefs.ingredients.innerHTML = recipe.ingredients.map(ingred => `
    <li class="modal-recipe-ingred">
      <span>${ingred.name}</span><span>${ingred.measure}</span>
    </li>`).join('');
  
  modalRefs.description.textContent = recipe.instructions;
}

export { loadModal };
