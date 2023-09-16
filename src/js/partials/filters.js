import { refs } from '../refs';
import { renderTimeOptions, renderOptions } from '../renders/render-gallery';
import TastyTreatsAPI from '../API/tasty-treats-api';

const tastyTreatsApi = new TastyTreatsAPI();

refs.recipeInput.addEventListener('input', debounce(onInputRecipe, 300));
refs.timeSelect.addEventListener('change', onTimeSelect);
refs.areaSelect.addEventListener('change', onAreaSelect);

refs.timeSelect.innerHTML = renderTimeOptions();
loadAreaOptions();

async function onInputRecipe(e) {
  const res = await tastyTreatsApi.fetchAllRecipes();
  const dataArr = res.data.results;

  const filteredByInput = dataArr.filter(item =>
    item.title.toLowerCase().includes(e.target.value.trim(' '))
  );

  refs.gallery.innerHTML = renderGallery(filteredByInput);
}

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
