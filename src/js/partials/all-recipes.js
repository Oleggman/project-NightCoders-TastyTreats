import TastyTreatsAPI from '../API/tasty-treats-api.js';
import { renderGallery } from '../renders/render-gallery.js';

const allRecipesRender = new TastyTreatsAPI();

const gallery = document.querySelector('.gallery-container');

async function a() {
  const res = await allRecipesRender.fetchAllRecipes();
  gallery.innerHTML = renderGallery(res.data.results);
}

a();

gallery.addEventListener('click', handlerLike);

function handlerLike(evt) {
  if (evt.target.classList.contains('like-icon')) {
    console.log(evt.target.classList);
    evt.target.classList.contains('like-favorite')
      ? evt.target.classList.remove('like-favorite')
      : evt.target.classList.add('like-favorite');
  }
}
