import { refs } from "../../refs";
import TastyTreatsAPI from "../../API/tasty-treats-api";
import { renderPopular } from "../../renders/render-gallery";

loadPopular();

async function loadPopular() {
  const res = await new TastyTreatsAPI().fetchPopularRecipes();
  refs.popularGallery.innerHTML = renderPopular(res.data);
}