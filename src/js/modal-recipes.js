// import TastyTreatsAPI from "../API/tasty-treats-api";

// const myTastyTreatsApi = new TastyTreatsAPI();


// const modal = document.querySelector(".modal-recipes-container");
// const closeModalBtn = document.querySelector(".modal-close-btn");
// const containerIngredients = document.querySelector(".ingredients");
// const containerSelected = document.querySelector(".selected");
// const recipeNameElement = document.querySelector(".name-of-recipe");
// const recipeText = document.querySelector(".recipe-text-box");

// const videoContainer = document.getElementById("recipeVideo");
// const playBtn = document.getElementById("playPause");

// const addToFavoritesBtn = document.querySelector("addToFavorites");
// const giveRatingBtn = document.querySelector("giveRating");

// // ЗАКРИТТЯ МОДАЛКИ

// closeModalBtn.addEventListener('click', closeModal)
// function closeModal(){
//     modal.style.display = "none";
// }


// // ВІДЕО
// function loadVideo() {
//     const backendUrl = "https://tasty-treats-backend.p.goit.global/api/recipes?youtube";
//     fetch(backendUrl)
//     .then(response => response.json())
//     .then(data => {
//         const videoUrl = data.videoUrl;
//         const videoElement = document.createElement("video");
//         videoElement.src = videoUrl;
//         videoElement.controls = true;
//         videoContainer.appendChild(videoElement);
//     })
//     .catch(error => {
//         console.error("Ooops! Video cann't loading...", error);
//     })
// }
// loadVideo();

//     playBtn.addEventListener('click', playVideo);
//         function playVideo () {
//         if(!video.paused) {
//             video.pause();
//         } else(video.play()) 
            
//         }
    

//     // function stopVideo() {
//     //     video.currentTime = 0;
//     //     video.pause();
//     // }
//     // stopVideo();
// // {/* <iframe width="560" height="315" src="${youtube}" frameborder="0" allowfullscreen></iframe> */}


// // ЗАГОЛОВОК


// function renderRecipeName(recipeNameElement) {
//     const markup = recipeNameElement
//       .map(
//         (tittle) => `<h2 
//         class="name-of-recipe only-mobile">${tittle}</h2> `
//       )
//       .join("");
//       ingredients.innerHTML = markup;
//   }
//   renderRecipeName()



// // СПИСОК ІНРЕДІЄНТІВ
// function renderIngredientsList(ingredients) {
//     const markup = ingredients
//       .map(
//         (ingredient) => `<ul class="ingredients">
//         <li class="product-name">
//             <p>"${ingredients.id}"</p>
//         </li>
//             <li class="number">
//                 <p>"${ingredients.measure}"</p>
//             </li>
//     </ul> `
//       )
//       .join("");
//       ingredients.innerHTML = markup;
//   }
//   renderIngredientsList()






// // ОБРАНІ КАТЕГОРІЇ (хештеги)
// function createMarkup(arr) {
//     return arr.map(({ tag }) => `
//     <li>
//       <p class="categiries">"#${tag}"</p>
//      </li> `).join('')
// }
// containerSelected.insertAdjacentHTML('beforeend', createMarkup(selected));


// // ТЕКСТ РЕЦЕПТУ

// function renderRecipeInstruction(instructions) {
//     const markup = instructions
//       .map(
//         (instructions) => `<p class="recipe-text">
//         ${instructions}/p>`
//       )
//       .join("");
//     userList.innerHTML = markup;
//   }

//   renderRecipeInstruction()

// // КНОПКИ
// addToFavoritesBtn.addEventListener('click', () => {

// });


// giveRatingBtn.addEventListener('click', () => {

// })

