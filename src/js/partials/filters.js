import { refs } from '../refs';
import { renderTimeOptions, renderOptions } from '../renders/render-gallery';
import TastyTreatsAPI from '../API/tasty-treats-api';

const tastyTreatsApi = new TastyTreatsAPI();

refs.recipeInput.addEventListener('input', debounce(onInputRecipe, 300));
refs.timeSelect.addEventListener('change', onTimeSelect);
refs.areaSelect.addEventListener('change', onAreaSelect);
refs.ingredSelect.addEventListener('change', onIngredSelect);

refs.timeSelect.innerHTML = renderTimeOptions();
loadAreaOptions();
loadIngredOptions();
// Input filter
async function onInputRecipe(e) {
  const res = await tastyTreatsApi.fetchAllRecipes();
  const dataArr = res.data.results;

  const filteredByInput = dataArr.filter(item =>
    item.title.toLowerCase().includes(e.target.value.trim(' '))
  );

  refs.gallery.innerHTML = renderGallery(filteredByInput);
}
// Time filter
async function onTimeSelect(e) {
  const selectedTime = Number(e.currentTarget.value);
  const res = await tastyTreatsApi.fetchAllRecipes();
  dataArr = res.data.results;

  const filteredByTime = dataArr.filter(recipe => {
    if (recipe.time) {
      return Number(recipe.time) <= selectedTime;
    }
  });

  refs.gallery.innerHTML = renderGallery(filteredByTime);
}
// Area filter
async function loadAreaOptions() {
  const res = await tastyTreatsApi.fetchAreas();
  refs.areaSelect.innerHTML = renderOptions(res.data);
}

async function onAreaSelect(e) {
  const value = e.currentTarget.value;
  const res = await tastyTreatsApi.fetchAllRecipes();
  dataArr = res.data.results;

  const recipesByArea = dataArr.filter(item => item.area === value);
  refs.gallery.innerHTML = renderGallery(recipesByArea);
}
// Ingredients filter
loadIngredOptions();
async function loadIngredOptions() {
  const res = await tastyTreatsApi.fetchIngrediens();
  refs.ingredSelect.innerHTML = renderOptions(res.data);
}

async function onIngredSelect(e) {
  const ingreds = await tastyTreatsApi.fetchIngrediens();
  const ingredId = ingreds.data.find(item => item.name === e.target.value)._id;

  const res = await tastyTreatsApi.fetchAllRecipes();
  dataArr = res.data.results;

  const recipesByIngreds = dataArr.filter(item =>
    item.ingredients.some(ingr => ingr.id === ingredId)
  );

  refs.gallery.innerHTML = renderGallery(recipesByIngreds);
}
