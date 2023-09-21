import { refs } from '../../refs';
import { renderGallery } from '../../renders/render-gallery';
import TastyTreatsAPI from '../../API/tasty-treats-api';
import debounce from 'lodash.debounce';
import svg from '../../../img/icons.svg';

import { renewPagination } from '../pagination-home';

const tastyTreatsApi = new TastyTreatsAPI();

refs.recipeInput.addEventListener('input', debounce(onInputRecipe, 300));
refs.timeSelect.addEventListener('change', onTimeSelect);
refs.areaSelect.addEventListener('change', onAreaSelect);
refs.ingredSelect.addEventListener('change', onIngredSelect);
refs.form.addEventListener('reset', onResetForm);
refs.inputIcon.innerHTML = `<svg class="svg-filter"><use href="${svg}#search"></use></svg>`
refs.resetIcon.innerHTML = `<svg class="reset-filter"><use href="${svg}#close"></use></svg>`

let filterArr = [];


export const filters = {
  time: '',
  area: '',
  ingredients: '',
  title: '',
  category: '',
};

console.log(filters);
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

async function onResetForm(e) {
  e.preventDefault();
  // const recipes = await getDataArr();
  // refs.gallery.innerHTML = renderGallery(recipes);
  // console.log(recipes.length);
  // console.log(recipes);
  filterArr = [];
  filters.area = '';
  filters.ingredients = '';
  filters.time = '';
  filters.title ='';

  const res = await tastyTreatsApi.fetchAllRecipes(1);
  console.log(res.data.totalPages);
  sessionStorage.setItem('totalPages', res.data.totalPages);
  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();

  refs.recipeInput.value = '';
  refs.timeSelect.selectedIndex = 0;
  refs.areaSelect.selectedIndex = 0;
  refs.ingredSelect.selectedIndex = 0;
}

// Input filter
async function onInputRecipe(e) {
  e.preventDefault();
  let dataArr = await getDataArr();
  
  
  const filteredByInput = dataArr.filter(item =>
    item.title.toLowerCase().includes(e.target.value.trim(' '))
  );
  filters.title = e.target.value;
  console.log(filters);
  // refs.gallery.innerHTML = renderGallery(filteredByInput);
  const res = await tastyTreatsApi.fetchAllRecipes(1);
  console.log(res.data.totalPages);
  sessionStorage.setItem('totalPages', res.data.totalPages);
  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();
  console.log(filteredByInput.length);
  sessionStorage.setItem('totalPages', filteredByInput.length)
}
// Time filter
async function onTimeSelect(e) {
  const selectedTime = Number(e.currentTarget.value);
  let dataArr = await getDataArr();
  filters.time = e.target.value;
  console.log(filters);


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

  // refs.gallery.innerHTML = renderGallery(filteredByTime);
  const res = await tastyTreatsApi.fetchAllRecipes(1);
  console.log(res.data.totalPages);
  sessionStorage.setItem('totalPages', res.data.totalPages);
  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();
  console.log(filteredByTime.length);
}
// Area filter
async function onAreaSelect(e) {
  const value = e.currentTarget.value;
  let dataArr = await getDataArr();
  filters.area = value;
  console.log(filters);

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

  // refs.gallery.innerHTML = renderGallery(recipesByArea);
  const res = await tastyTreatsApi.fetchAllRecipes(1);
  console.log(res.data.totalPages);
  sessionStorage.setItem('totalPages', res.data.totalPages);
  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();
}
// Ingredients filter
async function onIngredSelect(e) {
  const ingreds = await tastyTreatsApi.fetchIngrediens();
  const ingredId = ingreds.data.find(item => item.name === e.target.value)._id;

  let dataArr = await getDataArr();
  filters.ingredients = ingredId;
  console.log(filters);

  const recipesByIngreds = dataArr.filter(recipe => {
    if (filters.time && filters.area) {
      return (
        recipe.area === filters.area &&
        recipe.time === filters.time &&
        recipe.ingredients.some(ingr => ingr.id === ingredId)
      );
    } else if (filters.time) {
      return (
        recipe.time === filters.time &&
        recipe.ingredients.some(ingr => ingr.id === ingredId)
      );
    } else if (filters.area) {
      return (
        recipe.area === filters.area &&
        recipe.ingredients.some(ingr => ingr.id === ingredId)
      );
    } else {
      return recipe.ingredients.some(ingr => ingr.id === ingredId);
    }
  });

  // refs.gallery.innerHTML = renderGallery(recipesByIngreds);
  const res = await tastyTreatsApi.fetchAllRecipes(1);
  console.log(res.data.totalPages);
  sessionStorage.setItem('totalPages', res.data.totalPages);
  refs.gallery.innerHTML = renderGallery(res.data.results);
  renewPagination();
}
// export { filters }