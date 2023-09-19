import { refs } from '../../refs';
import TastyTreatsAPI from '../../API/tasty-treats-api';
import { renderPopular } from '../../renders/render-gallery';
import { loadModal } from '../modals/modal-recipes';

const recipeModal = document.querySelector('.modal-recipes-container');
const overlay = document.querySelector('.overlay');

const ttAPI = new TastyTreatsAPI();
loadPopular();

async function loadPopular() {
  const res = await new TastyTreatsAPI().fetchPopularRecipes();
  refs.popularGallery.innerHTML = renderPopular(res.data);
}

refs.popularGallery.addEventListener('click', handlerPopularClick);

async function handlerPopularClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  const cardId = evt.target.closest('.car-container').dataset.id;
  const recipe = await ttAPI.fetchOneRecipe(cardId);
  loadModal(recipe.data);
    
    document.body.style.overflow = "hidden";
  recipeModal.classList.add('active');
  overlay.classList.add('active');
}
