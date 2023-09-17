import TastyTreatsAPI from "../API/tasty-treats-api";

const myTastyTreatsApi = new TastyTreatsAPI();


const modal = document.querySelector(".modal-recipes-container");
const closeModalBtn = document.querySelector(".modal-close-btn");
const containerIngredients = document.querySelector(".ingredients");
const containerSelected = document.querySelector(".selected");
const recipeNameElement = document.querySelector(".name-of-recipe");
const recipeText = document.querySelector(".recipe-text-box");

const videoContainer = document.getElementById("recipeVideo");
const playBtn = document.getElementById("playPause");

const addToFavoritesBtn = document.querySelector("addToFavorites");
const giveRatingBtn = document.querySelector("giveRating");

// ЗАКРИТТЯ МОДАЛКИ

closeModalBtn.addEventListener('click', closeModal)
function closeModal(){
    modal.style.display = "none";
}


// ВІДЕО
function loadVideo() {
    const backendUrl = "https://tasty-treats-backend.p.goit.global/api/recipes?youtube";
    fetch(backendUrl)
    .then(response => response.json())
    .then(data => {
        const videoUrl = data.videoUrl;
        const videoElement = document.createElement("video");
        videoElement.src = videoUrl;
        videoElement.controls = true;
        videoContainer.appendChild(videoElement);
    })
    .catch(error => {
        console.error("Ooops! Video cann't loading...", error);
    })
}
loadVideo();

    playBtn.addEventListener('click', playVideo);
        function playVideo () {
        if(!video.paused) {
            video.pause();
        } else(video.play()) 
            
        }
    

    // function stopVideo() {
    //     video.currentTime = 0;
    //     video.pause();
    // }
    // stopVideo();
// {/* <iframe width="560" height="315" src="${youtube}" frameborder="0" allowfullscreen></iframe> */}


// ЗАГОЛОВОК

function loadRecipeName() {
    const titleUrl = "https://tasty-treats-backend.p.goit.global/api/recipes?title";
    fetch(titleUrl)
    .then(response => response.json())
    .then(data => {
        const recipeName = data.recipeName;
        recipeNameElement.textContent = recipeName; 
    })
    .catch(error => {
        console.error("Sory! Error loading recipe name:", error);
    })
}   
loadRecipeName()

function createAndInsertElement(data) {
    const newElement = document.createElement("div");
    newElement.textContent = data.recipeName;
    document.body.appendChild(newElement);
// add class
    newElement.classList.add('name-of-recipe');
    return newElement;
}
const newRecipeName = {
    recipeName: `${title}`
};
const createdElement = createAndInsertElement(newRecipeName)

// СПИСОК ІНРЕДІЄНТІВ
function renderIngredientsList(ingredients) {
    const markup = ingredients
      .map(
        (ingredient) => `<ul class="ingredients">
        <li class="product-name">
            <p>"${ingredients.id}"</p>
        </li>
            <li class="number">
                <p>"${ingredients.measure}"</p>
            </li>
    </ul> `
      )
      .join("");
      ingredients.innerHTML = markup;
  }
  renderIngredientsList()



// function createMarkup(arr) {
//     return arr.map(({ ingredients.id, ingredients.measure}) => `
//     <ul class="ingredients">
//     <li class="product-name">
//         <p>"${ingredients.id}"</p>
//     </li>
//         <li class="number">
//             <p>"${ingredients.measure}"</p>
//         </li>
// </ul> `).join('')
// }
// containerIngredients.insertAdjacentHTML('beforeend', createMarkup(ingredients));


// ОБРАНІ КАТЕГОРІЇ (хештеги)
function createMarkup(arr) {
    return arr.map(({ category }) => `
    <li>
      <p class="categiries">"#${category}"</p>
     </li> `).join('')
}
containerSelected.insertAdjacentHTML('beforeend', createMarkup(selected));


// ТЕКСТ РЕЦЕПТУ
// 
function loadRecipeInstruction() {
    const instructionUrl = "https://tasty-treats-backend.p.goit.global/api/recipes?instructions";
 fetch(instructionUrl)
 .then(response => response.text())
 .then(data => {
    const recipeInstructions = data.instructions;
    recipeText.textContent = recipeInstructions;
 })
 .catch(error => {
    console.error("Error loading and inserting recipe instructions:", error);
 });
}
loadRecipeInstruction();


// async fetchRecipe(id) {
//     return await axios.get(`${this.baseURL}/recipes/${id}`);
//   } 



// function renderUserListItems(users) {
//     const markup = users
//       .map(
//         (user) => `<li class="item">
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`
//       )
//       .join("");
//     userList.innerHTML = markup;
//   }



// КНОПКИ
addToFavoritesBtn.addEventListener('click', () => {

});


giveRatingBtn.addEventListener('click', () => {

})

