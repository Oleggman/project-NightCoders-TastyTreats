import { refs } from '../../refs';
import TastyTreatsAPI from '../../API/tasty-treats-api';
import { renderPopular } from '../../renders/render-gallery';

const recipeModal = document.querySelector('.modal-recipes-container');
const overlay = document.querySelector('.overlay');

loadPopular();

async function loadPopular() {
  const res = await new TastyTreatsAPI().fetchPopularRecipes();
  refs.popularGallery.innerHTML = renderPopular(res.data);
}

refs.popularGallery.addEventListener('click', handlerPopularClick);

function handlerPopularClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  const cardId = evt.target.closest('.car-container').dataset.id;
  // renderRecipe(cardId);  <----- запуск рендера модалки
  recipeModal.classList.add('active');
  overlay.classList.add('active');
}
