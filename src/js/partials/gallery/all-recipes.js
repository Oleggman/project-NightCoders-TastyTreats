import TastyTreatsAPI from '../../API/tasty-treats-api.js';
import { renderGallery } from '../../renders/render-gallery.js';

const allRecipesRender = new TastyTreatsAPI();

const gallery = document.querySelector('.cards-container');
loadGallery();

async function loadGallery() {
  // рендер карток
  const res = await allRecipesRender.fetchAllRecipes();
  gallery.innerHTML = renderGallery(res.data.results);

  // відмальовка сердечок з локалстореджа
  const idList = favorites.map(el => el.id);
  for (let i = 0; i < gallery.children.length; i++) {
    if (idList.includes(gallery.children[i].id)) {
      gallery.children[i].firstElementChild.firstElementChild.classList.add(
        'like-favorite'
      );
    }
  }
  console.log('render');
}

let favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

gallery.addEventListener('click', handlerLike);

function handlerLike(evt) {
  const svg = evt.target.firstElementChild;
  const li = evt.target.parentNode;
  if (evt.target.classList.contains('like-button')) {
    if (svg.classList.contains('like-favorite')) {
      svg.classList.remove('like-favorite');
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === li.id) {
          const _ = favorites.splice(i, 1);
        }
      }
    } else {
      favorites.push({
        title: li.dataset.title,
        category: li.dataset.category,
        description: li.dataset.description,
        id: li.id,
        preview: li.dataset.preview,
        rating: li.dataset.rating,
      });
      svg.classList.add('like-favorite');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
