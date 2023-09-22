import TastyTreatsAPI from '../../API/tasty-treats-api.js';
import { renderGallery } from '../../renders/render-gallery.js';
import { loadModal } from '../modals/modal-recipes.js';
import { stopVideo } from '../modals/stop-recipe-video.js';

const filters = {
  time: '',
  area: '',
  ingredients: '',
  title: '',
  category: '',
};

sessionStorage.setItem('filters', JSON.stringify(filters));
sessionStorage.setItem('totalPages', 32);

const allRecipesRender = new TastyTreatsAPI();
const gallery = document.querySelector('.cards-container');
const recipeModal = document.querySelector('.modal-recipes-container');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal-close-btn');
const loader = document.querySelector('.loader');

loadGallery();

async function loadGallery(currentPage, perPage) {
  // рендер карток
  loader.classList.remove('is-hidden');
  const res = await allRecipesRender.fetchAllRecipes(currentPage, perPage);
  sessionStorage.setItem('totalPages', res.data.totalPages);
  gallery.innerHTML = renderGallery(res.data.results);
  loader.classList.add('is-hidden');
  heartRender();
  gallery.addEventListener('click', handlerLike);
}

function heartRender() {
  // відмальовка сердечок з локалстореджа
  favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
  const idList = favorites.map(el => el.id);
  for (let i = 0; i < gallery.children.length; i++) {
    if (idList.includes(gallery.children[i].id)) {
      gallery.children[i].firstElementChild.firstElementChild.classList.add(
        'like-favorite'
      );
    } else {
      gallery.children[i].firstElementChild.firstElementChild.classList.remove(
        'like-favorite'
      );
    }
  }
}

let favorites = [];

async function handlerLike(evt) {
  const svg = evt.target.firstElementChild;
  const li = evt.target.parentNode;
  if (evt.target.classList.contains('like-button')) {
    if (svg.classList.contains('like-favorite')) {
      svg.classList.remove('like-favorite');
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === li.id) {
          const _ = favorites.splice(i, 1);
        }
      }
    } else {
      favorites.push({
        title: li.dataset.title,
        category: li.dataset.category,
        description: li.dataset.description,
        id: li.id,
        preview: li.dataset.preview,
        rating: li.dataset.rating,
      });
      svg.classList.add('like-favorite');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  // відкриття модалки з рецептом + рендрер
  if (evt.target.classList.contains('card-footer-btn')) {
    const cardId = evt.target.dataset.id;
    const recipe = await allRecipesRender.fetchOneRecipe(cardId);
    loadModal(recipe.data);

    recipeModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// закриття модалки по кліку на іконку
closeBtn.addEventListener('click', handlerCLoseBtn);
function handlerCLoseBtn() {
  stopVideo();
  recipeModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}
export { loadGallery };

export { heartRender };
