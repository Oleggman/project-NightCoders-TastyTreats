import {renderGallery} from '../renders/render-gallery.js'



const ref = {
    favoriteCategoriesList: document.querySelector('.favorite-categories-btn'),
    favoriteRecipesList: document.querySelector('.favorites-list'),
    favoritesDefault: document.querySelector('.favorites-default'),
    paginationBox: document.getElementById('pagination'),
    allBtn: document.querySelector('.all-btn'),
};

let currentCategory = '';


function onFavoritesReloaded() {
    const categoryMarkup = generateCategoryList();
    const allCatBtn = `<button class="button-fav all-btn" name="all">All categories</button>`;

    const data = JSON.parse(localStorage.getItem('favorites')) || [];

    ref.favoriteCategoriesList.innerHTML = '';
    ref.favoriteRecipesList.innerHTML = '';

    if (data.length) {
        ref.favoriteCategoriesList.innerHTML = `${allCatBtn}${categoryMarkup}`;
    } else {
        ref.allBtn.style.display = 'none';
    }
    generateStorageList();
}

function generateStorageList() {
    const storage = localStorage.getItem('favorites');
    const data = JSON.parse(storage) || [];

    ref.allBtn.style.display = 'none';

    if (data.length) {
        ref.allBtn.style.display = 'block';
        
        let filteredData;
        if (currentCategory === '') {
            filteredData = data;
        } else {
            filteredData = data.filter((recipe) => recipe.category === currentCategory);
        }
        ref.favoriteRecipesList.innerHTML = renderGallery(filteredData);
        
        ref.favoritesDefault.classList.add('is-hidden-favorites')
    } else {
        ref.favoritesDefault.classList.remove('is-hidden-favorites');
        ref.allBtn.classList.add('is-hidden-favorites');
    }

    if (data.lengt === 0) {
        ref.favoritesDefault.classList.remove('is-hidden-favorites');
        ref.favoriteCategoriesList.innerHTML = '';
        ref.allBtn.style.display = 'none'
    } else {
        ref.favoritesDefault.classList.add('is-hidden-favorites');
    }
}

function generateCategoryList() {
    const storage = localStorage.getItem('favorites');
    const data = JSON.parse(storage) || [];

    if (data.length) {
        return data
            .flatMap((recipe) => recipe.category)
            .filter((category, index, array) => array.indexOf(category) === index)
            .reduce((categoryMarkup, category) => categoryMarkup + renderCategory(category), '');
    }
    return '';
};

const renderCategory = (category) => `<button class="button-fav">${category}</button>`;

function filterByCategory(evt) {

    if (evt.target.nodeName === 'BUTTON') {
        
        if (evt.target.name === 'all') {
            currentCategory = '';

            setActiveClass(evt.target);
        } else {
            currentCategory = evt.target.textContent;

            setActiveClass(evt.target);
        }

        generateStorageList();
    }
};

function setActiveClass(targetButton) {
    const allCatBtn = document.querySelector('.all-btn');
    const categoryButtons = document.querySelectorAll('.button-fav');

    categoryButtons.forEach((button) => {
        if (button === targetButton) {
            button.classList.add('onActive');
        } else {
            button.classList.remove('onActive');
        }
    });

    allCatBtn.classList.remove('onActive');
};




document.addEventListener('DOMContentLoaded', onFavoritesReloaded);
ref.favoriteCategoriesList.addEventListener('click', filterByCategory);







