const modalRefs = {
  titles: document.querySelectorAll('.recipe-modal-title'),
  video: document.querySelector('.video-container'),
  description: document.querySelector('.recipe-text'),
}

loadModal();
async function loadModal(recipe) {
  console.log(recipe)
  modalRefs.titles.forEach(title => title.textContent = recipe.title);
  modalRefs.video.setAttribute('src', recipe.youtube);

  modalRefs.description.textContent = recipe.instructions;
}

export { loadModal };