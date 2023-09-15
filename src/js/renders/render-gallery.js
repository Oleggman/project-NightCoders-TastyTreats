function renderGallery(data) {
  return data.map(item => `<!-- Розмітка картки рецепту -->`).join('');
}

function renderPopular(data) {
  return data.map(item => `<!-- Розмітка лішки популярних -->`).join('');
}

function renderOptions(data) {
  return data.map(item => `<!-- Розмітка кнопки категорії -->`).join('');
}

function renderEvents() {
  return data.map(item => `<!-- Розмітка івенту в герої -->`).join('');
}

export { renderGallery, renderPopular, renderOptions, renderEvents };
