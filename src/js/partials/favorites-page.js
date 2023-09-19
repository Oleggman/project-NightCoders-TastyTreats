import svg from '../../img/icons.svg'


const ref = {
    favoriteCategoriesList: document.querySelector('.favorite-categories-btn'),
    favoriteRecipesList: document.querySelector('.favorites-list'),
    favoritesDefault: document.querySelector('.favorites-default'),
    allBtn: document.querySelector('.all-btn'),
    gallery: document.querySelector('.favorites-card-list'),
};

let currentCategory = '';


function onFavoritesReloaded() {
    const categoryMarkup = generateCategoryList();
    const allCatBtn = `<button class="button-fav all-btn" name="all">All categories</button>`;

    const data = JSON.parse(localStorage.getItem('favorites')) || [];

    ref.favoriteCategoriesList.innerHTML = '';
    ref.favoriteRecipesList.innerHTML = '';

    if (data.length) {
        ref.favoriteCategoriesList.innerHTML = `${allCatBtn}${categoryMarkup}`;
    } else {
        ref.allBtn.style.display = 'none';
    }
    generateStorageList();
}

function generateStorageList() {
    const storage = localStorage.getItem('favorites');
    const data = JSON.parse(storage) || [];

    ref.allBtn.style.display = 'none';

    if (data.length) {
      ref.allBtn.style.display = 'block';
        
        let filteredData;
        if (currentCategory === '') {
            filteredData = data;
        } else {
            filteredData = data.filter((recipe) => recipe.category === currentCategory);
        }

      ref.favoriteRecipesList.innerHTML = renderGalleryFavorite(filteredData);
        
const favoriteButtons = document.querySelectorAll('.like-button');
    favoriteButtons.forEach((button) => {
        button.onclick = () => handleFavoriteButtonClick(button);
    });


        ref.favoritesDefault.classList.add('is-hidden-favorites')
    } else {
        ref.favoritesDefault.classList.remove('is-hidden-favorites');
        ref.allBtn.classList.add('is-hidden-favorites');
    }

    if (data.length === 0) {
        ref.favoritesDefault.classList.remove('is-hidden-favorites');
        ref.favoriteCategoriesList.innerHTML = '';
        ref.allBtn.style.display = 'none'
    } else {
        ref.favoritesDefault.classList.add('is-hidden-favorites');
    }
}

// Генерація кнопок категорій
function generateCategoryList() {
    const storage = localStorage.getItem('favorites');
    const data = JSON.parse(storage) || [];

    if (data.length) {
        return data
            .flatMap((recipe) => recipe.category)
            .filter((category, index, array) => array.indexOf(category) === index)
            .reduce((categoryMarkup, category) => categoryMarkup + renderCategory(category), '');
    }
    return '';
};

const renderCategory = (category) => `<button class="button-fav">${category}</button>`;

function filterByCategory(evt) {

    if (evt.target.nodeName === 'BUTTON') {
        
        if (evt.target.name === 'all') {
            currentCategory = '';

            setActiveClass(evt.target);
        } else {
            currentCategory = evt.target.textContent;

            setActiveClass(evt.target);
        }

        generateStorageList();
    }
};

function setActiveClass(targetButton) {
    const categoryButtons = document.querySelectorAll('.button-fav');

    categoryButtons.forEach((button) => {
        if (button === targetButton) {
            button.classList.add('onActive');
        } else {
            button.classList.remove('onActive');
        }
    });
};

document.addEventListener('DOMContentLoaded', onFavoritesReloaded);
ref.favoriteCategoriesList.addEventListener('click', filterByCategory);

function handleFavoriteButtonClick(button) {
    console.log(button);
    console.log(button.id);
    const infoRecipe = button.id;
    console.log(button);
  const storage = localStorage.getItem('favorites');
  let data = JSON.parse(storage) || [];

  const recipeIndex = data.findIndex(recipe => recipe.id === infoRecipe);

  if (recipeIndex !== -1) {
    const removedRecipeCategory = data[recipeIndex].category;
    data.splice(recipeIndex, 1);
    localStorage.setItem('favorites', JSON.stringify(data));

      
    const remainingData = JSON.parse(localStorage.getItem('favorites')) || [];
    const otherRecipesInCategory = remainingData.some(
      recipe => recipe.category === removedRecipeCategory
    );

    if (!otherRecipesInCategory) {

      const recipeCards = document.querySelectorAll('.item');
      recipeCards.forEach(card => {
        if (card.dataset.category === removedRecipeCategory) {
          card.remove();
        }
      });

      const categoryButtons = ref.favoriteCategoriesList.querySelectorAll('.button-fav');
      categoryButtons.forEach(categoryButton => {
        if (categoryButton.textContent === removedRecipeCategory) {
          categoryButton.remove();
        }
      });
    }
  }

    const remainingData = JSON.parse(localStorage.getItem('favorites')) || [];
  if (remainingData.length === 0) {
    ref.favoriteRecipesList.innerHTML = '';
    ref.allBtn.style.display = 'none';
    ref.favoritesDefault.classList.remove('is-hidden-favorites');
    ref.favoriteCategoriesList.innerHTML = '';
  } else {
    generateStorageList();
  }
};


// Функція рендеру карток-рецептів

function renderGalleryFavorite(data) {
  return data
    .map(
      ({ title, description, preview, rating, id, category, area }) => `<li
      class="card-container" id='${id}' data-category='${category}' data-area='${area}' data-title='${title}' data-description="${description}" data-preview="${preview}" data-rating="${rating}"
      style="background-image: linear-gradient(1deg,rgba(5, 5, 5, 0.6),rgba(5, 5, 5, 0)),
      url(${preview});">
      <button class="like-button" id='${id}'>
        <svg class="like-icon like-favorite" width="22" height="22">
          <use href="${svg}#heart"></use>
        </svg>
        </button>
      <div class="card-info">
        <h3 class="card-header">${title}</h3>
        <p class="card-description">
          ${description}
        </p>
        <div class="card-footer">
          <div class="card-rate">
            <span class="card-rate-value">${Number(rating).toFixed(1)}</span>
            <div class="card-rate-stars">
              <svg class=${
                Number(rating).toFixed(1) >= 1 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="${svg}#star"></use>
              </svg>
              <svg class=${
                Number(rating).toFixed(1) >= 2 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="${svg}#star"></use>
              </svg>
              <svg class=${
                Number(rating).toFixed(1) >= 3 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="${svg}#star"></use>
              </svg>
              <svg class=${
                Number(rating).toFixed(1) >= 4 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="${svg}#star"></use>
              </svg>
              <svg class=${
                Number(rating).toFixed(1) >= 5 ? 'star-icon-orange' : 'star-icon-grey'
              }>
                <use href="${svg}#star"></use>
              </svg>
            </div>
          </div>
          <button class="card-footer-btn js-open-modal" data-id="${id}" data-modal="2">See recipe</button>
        </div>
      </div>
    </li>`
    )
    .join('');
}



