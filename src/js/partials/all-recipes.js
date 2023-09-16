import TastyTreatsAPI from '../API/tasty-treats-api.js';
import { renderGallery } from '../renders/render-gallery.js';

const allRecipesRender = new TastyTreatsAPI();
const gallery = document.querySelector('.cards-container');
a();

async function a() {
  const res = await allRecipesRender.fetchAllRecipes();
  gallery.innerHTML = renderGallery(res.data.results);
}

let favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
const idList = favorites.map(el => el.id);
console.log(idList);

// for (let i = 0; i < 10; i++) {
//   if (idList.includes(cards[i].id)) {
//     cards[i].classList.add('like-favorite');
//   }
// }

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
