import { refs } from "../../refs";
import TastyTreatsAPI from "../../API/tasty-treats-api";
import { renderCategories, renderGallery } from "../../renders/render-gallery";

refs.allBtn.addEventListener('click', onAllRecipesClick);
refs.categoriesBox.addEventListener('click', onSearchCategory);
const tastyTreatsApi = new TastyTreatsAPI();
loadCategories();

let recipes = [];

async function onAllRecipesClick(e) {
  let data = await getDataArr();
  refs.gallery.innerHTML = renderGallery(data);
}

async function loadCategories() {
  const res = await tastyTreatsApi.fetchCategories();
  refs.categoriesBox.innerHTML = renderCategories(res.data);
}

async function onSearchCategory(e) {
  if (!e.target.classList.contains('js-category')) {
    return;
  }

  const value = e.target.textContent;
  let data = await getDataArr();

  const recipesByCategory = data.filter(
    item => item.category === value
  );
  refs.gallery.innerHTML = renderGallery(recipesByCategory);
}

async function getDataArr() {
  let data = [];
  if (recipes[0]) {
    data = [];
  } else {
    const res = await tastyTreatsApi.fetchAllRecipes();
    data = res.data.results;
  }

  return data;
}