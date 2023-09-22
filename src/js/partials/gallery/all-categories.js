import { refs } from '../../refs';
import TastyTreatsAPI from '../../API/tasty-treats-api';
import { renderCategories, renderGallery } from '../../renders/render-gallery';
import { renewPagination } from '../pagination-home';

refs.allBtn.addEventListener('click', onAllRecipesClick);
refs.categoriesBox.addEventListener('click', onSearchCategory);
const tastyTreatsApi = new TastyTreatsAPI();
loadCategories();

let recipes = [];

const filters = {
  time: '',
  area: '',
  ingredients: '',
  title: '',
  category: '',
};
async function onAllRecipesClick(e) {
  // let data = await getDataArr();
  filters.area = '';
  filters.ingredients = '';
  filters.time = '';
  filters.title ='';
  filters.category = '';
  sessionStorage.setItem('filters', JSON.stringify(filters));
  sessionStorage.setItem('totalPages', 32);
  const res = await tastyTreatsApi.fetchAllRecipes(1);

  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();
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
  filters.category = value;
  console.log(value);
  sessionStorage.setItem('filters', JSON.stringify(filters));
  const res = await tastyTreatsApi.fetchAllRecipes();
  // let data = await getDataArr();

  // const recipesByCategory = data.filter(
  //   item => item.category === value
  // );
  sessionStorage.setItem('totalPages', res.data.totalPages);
  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();
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
