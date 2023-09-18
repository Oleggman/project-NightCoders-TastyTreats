const modalRefs = {
  titles: document.querySelectorAll('.recipe-modal-title'),
  video: document.querySelector('.video-container'),
  tags: document.querySelector('.recipe-modal-tags'),
  ingredients: document.querySelector('.recipe-modal-ingreds'),
  description: document.querySelector('.recipe-text'),
}

loadModal();
async function loadModal(recipe) {
  console.log(recipe)
  modalRefs.titles.forEach(title => title.textContent = recipe.title);
  modalRefs.video.setAttribute('src', recipe.youtube);
  
  modalRefs.tags.innerHTML = recipe.tags.map(tag => `
    <li>
      <p class="categiries">#${tag}</p>
    </li>`).join('');
  
  modalRefs.ingredients.innerHTML = recipe.ingredients.map(ingred => `
    <li class="modal-recipe-ingred">
      <span>${ingred.name}</span><span>${ingred.measure}</span>
    </li>`).join('');
  
  modalRefs.description.textContent = recipe.instructions;
}

export { loadModal };