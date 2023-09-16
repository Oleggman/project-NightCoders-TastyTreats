import { refs } from '../refs';

refs.recipeInput.addEventListener('input', debounce(onInputRecipe, 300));

async function onInputRecipe(e) {
  const res = await tastyTreatsApi.fetchAllRecipes();
  const dataArr = res.data.results;

  const filteredByInput = dataArr.filter(item =>
    item.title.toLowerCase().includes(e.target.value.trim(' '))
  );

  refs.gallery.innerHTML = renderGallery(filteredByInput);
}
