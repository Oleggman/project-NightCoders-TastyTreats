import { refs } from '../../refs';
import {
  renderTimeOptions,
  renderOptions,
  renderGallery,
} from '../../renders/render-gallery';
import TastyTreatsAPI from '../../API/tasty-treats-api';

const tastyTreatsApi = new TastyTreatsAPI();

refs.recipeInput.addEventListener('input', debounce(onInputRecipe, 300));
refs.timeSelect.addEventListener('change', onTimeSelect);
refs.areaSelect.addEventListener('change', onAreaSelect);
refs.ingredSelect.addEventListener('change', onIngredSelect);
refs.form.addEventListener('reset', onResetForm);

refs.timeSelect.innerHTML = renderTimeOptions();
loadAreaOptions();
loadIngredOptions();

let filterArr = [];

const filters = {
  time: '',
  area: '',
  ingredients: '',
};

async function getDataArr() {
  let dataArr = [];
  if (filterArr[0]) {
    dataArr = filterArr;
  } else {
    const res = await tastyTreatsApi.fetchAllRecipes();
    dataArr = res.data.results;
    filterArr = dataArr;
  }

  return dataArr;
}

function onResetForm(e) {
  e.currentTarget.preventDefault();
  e.currentTarget.reset();
  refs.gallery.innerHTML = renderGallery(filterArr);
}

// Input filter
async function onInputRecipe(e) {
  let dataArr = await getDataArr();

  const filteredByInput = dataArr.filter(item =>
    item.title.toLowerCase().includes(e.target.value.trim(' '))
  );

  refs.gallery.innerHTML = renderGallery(filteredByInput);
}
// Time filter
async function onTimeSelect(e) {
  const selectedTime = Number(e.currentTarget.value);
  let dataArr = await getDataArr();
  filters.time = selectedTime;

  const filteredByTime = dataArr.filter(recipe => {
    if (!recipe.time) {
      return;
    }

    if (filters.area && filters.ingredients) {
      return (
        Number(recipe.time) <= selectedTime &&
        recipe.area === filters.area &&
        recipe.ingredients.some(ingr => ingr.id === filters.ingredients)
      );
    } else if (filters.area) {
      return (
        Number(recipe.time) <= selectedTime && recipe.area === filters.area
      );
    } else if (filters.ingredients) {
      return (
        Number(recipe.time) <= selectedTime &&
        recipe.ingredients.some(ingr => ingr.id === filters.ingredients)
      );
    } else {
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
  let dataArr = await getDataArr();
  filters.area = value;

  const recipesByArea = dataArr.filter(recipe => {
    if (filters.time && filters.ingredients) {
      return (
        recipe.area === value &&
        recipe.time === filters.time &&
        recipe.ingredients.some(ingr => ingr.id === filters.ingredients)
      );
    } else if (filters.time) {
      return recipe.area === value && recipe.time === filters.time;
    } else if (filters.ingredients) {
      return (
        recipe.area === value &&
        recipe.ingredients.some(ingr => ingr.id === filters.ingredients)
      );
    } else {
      return recipe.area === value;
    }
  });

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

  let dataArr = await getDataArr();
  filters.ingredients = ingredId;

  const recipesByIngreds = dataArr.filter(recipe => {
    if (filters.time && filters.area) {
      return (
        recipe.area === filters.area &&
        recipe.time === filters.time &&
        item.ingredients.some(ingr => ingr.id === ingredId)
      );
    } else if (filters.time) {
      return (
        recipe.time === filters.time &&
        item.ingredients.some(ingr => ingr.id === ingredId)
      );
    } else if (filters.area) {
      return (
        recipe.area === filters.area &&
        item.ingredients.some(ingr => ingr.id === ingredId)
      );
    } else {
      return item.ingredients.some(ingr => ingr.id === ingredId);
    }
  });

  refs.gallery.innerHTML = renderGallery(recipesByIngreds);
}
