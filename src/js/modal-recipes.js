import TastyTreatsAPI from "../API/tasty-treats-api";


const modal = document.querySelector(".modal-recipes-container");
const closeModalBtn = document.querySelector(".modal-close-btn");
const containerIngredients = document.querySelector(".ingredients");
const containerSelected = document.querySelector(".selected");
const name = document.querySelector(".name-of-recipe");
const recipeText = document.querySelector("");

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
    const getvideosUrl = "${youtube}";
    fetch(getvideosUrl)
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
        } else(!video.played) {
            video.play();
        }
    }

    // function stopVideo() {
    //     video.currentTime = 0;
    //     video.pause();
    // }
    // stopVideo();
// {/* <iframe width="560" height="315" src="${youtube}" frameborder="0" allowfullscreen></iframe> */}


// ЗАГОЛОВОК




// СПИСОК ІНРЕДІЄНТІВ

function createMarkup(arr) {
    return arr.map(({ }) => `
    <ul class="ingredients">
    <li class="product-name">
        <p>"${}"</p>
    </li>
        <li class="number">
            <p>"${}"</p>
        </li>
</ul> `).join('')
}
containerIngredients.insertAdjacentHTML('beforeend', createMarkup(ingredients));


// ОБРАНІ КАТЕГОРІЇ (хештеги)
function createMarkup(arr) {
    return arr.map(({ }) => `
    <li>
      <p class="categiries">"#${}"</p>
     </li> `).join('')
}
containerSelected.insertAdjacentHTML('beforeend', createMarkup(selected));


// ТЕКСТ РЕЦЕПТУ
const fetchRecipes = async name => {
    const response = await fetch(`${this.baseURL}/recipes/${id}`)
    return await response.json();
}
// text() - парсить дані в простому текстовому форматі, наприклад .csv (табличні дані).

// async fetchRecipe(id) {
//     return await axios.get(`${this.baseURL}/recipes/${id}`);
//   } 


// КНОПКИ
addToFavoritesBtn.addEventListener('click', () => {

});


giveRatingBtn.addEventListener('click', () => {

})

