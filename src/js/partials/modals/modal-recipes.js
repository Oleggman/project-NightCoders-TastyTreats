const modalRefs = {
  titles: document.querySelectorAll('.recipe-modal-title'),
  video: document.querySelector('.video-container'),
  description: document.querySelector('.recipe-text'),
  ingredients: document.querySelector('.recipe-modal-ingreds'),
}

loadModal();
async function loadModal(recipe) {
  console.log(recipe)
  modalRefs.titles.forEach(title => title.textContent = recipe.title);
  modalRefs.video.setAttribute('src', recipe.youtube);

  modalRefs.description.textContent = recipe.instructions;
  modalRefs.ingredients.innerHTML = recipe.ingredients.map(ingred => `
    <li class="modal-recipe-ingred">
      <span>${ingred.name}</span><span>${ingred.measure}</span>
    </li>
  `).join('');
}

export { loadModal };