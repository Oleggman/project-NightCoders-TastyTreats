import { refs } from "../../refs";
import { renderOptions } from "../../renders/render-gallery";
import TastyTreatsAPI from "../../API/tasty-treats-api";

const tastyTreatsApi = new TastyTreatsAPI();

loadTimeOptions();
loadAreaOptions();
loadIngredOptions();

function loadTimeOptions() {
  let markup = '';
  for (let time = 5; time <= 120; time += 5) {
    markup += `<option value="${time}">${time} mins</option>`;
  }
  refs.timeSelect.insertAdjacentHTML('beforeend', markup);
}

async function loadAreaOptions() {
  const res = await tastyTreatsApi.fetchAreas();
  const markup = renderOptions(res.data);
  refs.areaSelect.insertAdjacentHTML('beforeend', markup);
}

async function loadIngredOptions() {
  const res = await tastyTreatsApi.fetchIngrediens();
  const markup = renderOptions(res.data);
  refs.ingredSelect.insertAdjacentHTML('beforeend', markup);
}