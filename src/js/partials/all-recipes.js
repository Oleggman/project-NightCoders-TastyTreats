import TastyTreatsAPI from '../API/tasty-treats-api.js';
import { renderGallery } from '../renders/render-gallery.js';

const allRecipesRender = new TastyTreatsAPI();

const gallery = document.querySelector('.gallery-container');

async function a() {
  const res = await allRecipesRender.fetchAllRecipes();
  gallery.innerHTML = renderGallery(res.data.results);
  console.log(res);
}

a();
