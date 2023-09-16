import TastyTreatsAPI from '../API/tasty-treats-api.js';
import { renderGallery } from '../renders/render-gallery.js';

const allRecipesRender = new TastyTreatsAPI();
const gallery = document.querySelector('.gallery-container');

async function a() {
  const res = await allRecipesRender.fetchAllRecipes();
  gallery.innerHTML = renderGallery(res.data.results);
}

a();

const favorites = [];

gallery.addEventListener('click', handlerLike);

function handlerLike(evt) {
  if (evt.target.classList.contains('like-button')) {
    if (evt.target.firstElementChild.classList.contains('like-favorite')) {
      evt.target.firstElementChild.classList.remove('like-favorite');
    } else {
      console.dir(evt.target.parentNode);
      favorites.push({
        category: evt.target.parentNode.dataset.category,
        description: ' ',
        id: ' ',
        preview: ' ',
        rating: ' ',
        title: ' ',
      });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      evt.target.firstElementChild.classList.add('like-favorite');
    }
  }
}
