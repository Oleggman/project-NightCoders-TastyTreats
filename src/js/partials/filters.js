import { refs } from '../refs';
import { renderTimeOptions } from '../renders/render-gallery';

refs.recipeInput.addEventListener('input', debounce(onInputRecipe, 300));
refs.timeSelect.addEventListener('change', onTimeSelect);
refs.timeSelect.innerHTML = renderTimeOptions();

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
