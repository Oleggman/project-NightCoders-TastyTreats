// // switcccccccccccccccccccccchhhhhhhhhhhhhhhhhhhhhh
// // баг - в чекбоксе при обновлении экрана кружок становиться вправо при
// // темной теме, может получиться двигать его в js, у меня не получилось
// // нужно поменять стили к темной теме на горизонтальных фильтрах, посмотреть
// // как будут себя вести все svg и цифри на пагинации
// const themeToggle = document.getElementById('theme-toggle');
// const content = document.querySelector('body');
// const btnCategories = document.querySelector('.all-categories-btn');
// const allFilters = document.querySelector('.filter-categories');
// const allBtn = document.querySelectorAll('.btn-filter');
// console.log(allBtn);
// console.dir(allFilters);
// console.log([...allFilters.children]);
// const form = document.querySelector('.js-form');
// console.log(form);
// const searchBar = document.querySelector('.js-recipe-input');
// console.dir(searchBar.attributes);
// const select = document.querySelectorAll('.select');
// console.log(select);
// // кнопки фильтры карегорий  меняют классы
// const formLabels = [...form.children];
// const selectEl = [...select]
// const btns = [...allFilters.children]
// console.log(selectEl);
// console.log(btns);
// function changeClaslist(arr, oldClass, newClass) {
//    return arr.map((item) => item.classList.replace(`${oldClass}`, `${newClass}`))
//   }
// themeToggle.addEventListener('change', onClickDarkTheme);
// const KEY_THEME = "theme";
// const currentTheme = JSON.parse(localStorage.getItem(KEY_THEME))
// console.log(currentTheme);
// // кликаем на чекбокс меняем тему помещаем ключи в local Storage
// function onClickDarkTheme(evt) {
//   const currentTheme = localStorage.getItem(KEY_THEME)
//   console.log(currentTheme);
//   if (themeToggle.checked) {
//     content.classList.replace('light-theme', 'dark-theme');
//     // кнопка all categories
//     btnCategories.classList.replace('btn-categories', 'dark-all-categories');
//     // инпут ввода текста
//      searchBar.classList.replace('search-bar', 'dark-search-bar');
//     //  кнопки фильтр по категориям
//     changeClaslist(btns, 'btn-filter', 'dark-btn-firter');
//     // текст над инпутами в фильтрах
//     changeClaslist(formLabels, 'filters-label', 'dark-filters-label');
//     //   инпуты в фильтрах
//      changeClaslist(selectEl,'filters-option','dark-select');
//     localStorage.setItem(KEY_THEME, JSON.stringify("dark"));
//     } else {
//     content.classList.replace('dark-theme','light-theme');
//     btnCategories.classList.replace('dark-all-categories', 'btn-categories');
//     searchBar.classList.replace('dark-search-bar', 'search-bar');
//     changeClaslist(btns,'dark-btn-firter','btn-filter');
//     changeClaslist( formLabels,'dark-filters-label','filters-label');
//     changeClaslist(selectEl,'dark-select','filters-option');
//     localStorage.removeItem(KEY_THEME);
//   }
// }
// // при обновлении экрана обновляем текущую тему
// function checkTHeme(currentTheme) {
// if (currentTheme === "dark") {
//   content.classList.add('dark-theme');
//   btnCategories.classList.replace('btn-categories', 'dark-all-categories');
//   searchBar.classList.replace('search-bar', 'dark-search-bar');
//   changeClaslist(btns, 'btn-filter', 'dark-btn-firter');
//   changeClaslist(formLabels, 'filters-label', 'dark-filters-label');
//   changeClaslist(selectEl,'filters-option','dark-select');
//   themeToggle.checked === true;
// } else {
//     content.classList.add('light-theme');
//     btnCategories.classList.replace('dark-all-categories', 'btn-categories');
//     searchBar.classList.replace('dark-search-bar', 'search-bar');
//     changeClaslist(btns,'dark-btn-firter','btn-filter');
//     changeClaslist( formLabels,'dark-filters-label','filters-label');
//     changeClaslist(selectEl,'dark-select','filters-option');
// }
// }
//   checkTHeme(currentTheme)// switcccccccccccccccccccccchhhhhhhhhhhhhhhhhhhhhh
// // баг - в чекбоксе при обновлении экрана кружок становиться вправо при
// // темной теме, может получиться двигать его в js, у меня не получилось
// // нужно поменять стили к темной теме на горизонтальных фильтрах, посмотреть
// // как будут себя вести все svg и цифри на пагинации
// const themeToggle = document.getElementById('theme-toggle');
// const content = document.querySelector('body');
// const btnCategories = document.querySelector('.all-categories-btn');
// const allFilters = document.querySelector('.filter-categories');
// const allBtn = document.querySelectorAll('.btn-filter');
// console.log(allBtn);
// console.dir(allFilters);
// console.log([...allFilters.children]);
// const form = document.querySelector('.js-form');
// console.log(form);
// const searchBar = document.querySelector('.js-recipe-input');
// console.dir(searchBar.attributes);
// const select = document.querySelectorAll('.select');
// console.log(select);
// // кнопки фильтры карегорий  меняют классы
// const formLabels = [...form.children];
// const selectEl = [...select]
// const btns = [...allFilters.children]
// console.log(selectEl);
// console.log(btns);
// function changeClaslist(arr, oldClass, newClass) {
//    return arr.map((item) => item.classList.replace(`${oldClass}`, `${newClass}`))
//   }
// themeToggle.addEventListener('change', onClickDarkTheme);
// const KEY_THEME = "theme";
// const currentTheme = JSON.parse(localStorage.getItem(KEY_THEME))
// console.log(currentTheme);
// // кликаем на чекбокс меняем тему помещаем ключи в local Storage
// function onClickDarkTheme(evt) {
//   const currentTheme = localStorage.getItem(KEY_THEME)
//   console.log(currentTheme);
//   if (themeToggle.checked) {
//     content.classList.replace('light-theme', 'dark-theme');
//     // кнопка all categories
//     btnCategories.classList.replace('btn-categories', 'dark-all-categories');
//     // инпут ввода текста
//      searchBar.classList.replace('search-bar', 'dark-search-bar');
//     //  кнопки фильтр по категориям
//     changeClaslist(btns, 'btn-filter', 'dark-btn-firter');
//     // текст над инпутами в фильтрах
//     changeClaslist(formLabels, 'filters-label', 'dark-filters-label');
//     //   инпуты в фильтрах
//      changeClaslist(selectEl,'filters-option','dark-select');
//     localStorage.setItem(KEY_THEME, JSON.stringify("dark"));
//     } else {
//     content.classList.replace('dark-theme','light-theme');
//     btnCategories.classList.replace('dark-all-categories', 'btn-categories');
//     searchBar.classList.replace('dark-search-bar', 'search-bar');
//     changeClaslist(btns,'dark-btn-firter','btn-filter');
//     changeClaslist( formLabels,'dark-filters-label','filters-label');
//     changeClaslist(selectEl,'dark-select','filters-option');
//     localStorage.removeItem(KEY_THEME);
//   }
// }
// // при обновлении экрана обновляем текущую тему
// function checkTHeme(currentTheme) {
// if (currentTheme === "dark") {
//   content.classList.add('dark-theme');
//   btnCategories.classList.replace('btn-categories', 'dark-all-categories');
//   searchBar.classList.replace('search-bar', 'dark-search-bar');
//   changeClaslist(btns, 'btn-filter', 'dark-btn-firter');
//   changeClaslist(formLabels, 'filters-label', 'dark-filters-label');
//   changeClaslist(selectEl,'filters-option','dark-select');
//   themeToggle.checked === true;
// } else {
//     content.classList.add('light-theme');
//     btnCategories.classList.replace('dark-all-categories', 'btn-categories');
//     searchBar.classList.replace('dark-search-bar', 'search-bar');
//     changeClaslist(btns,'dark-btn-firter','btn-filter');
//     changeClaslist( formLabels,'dark-filters-label','filters-label');
//     changeClaslist(selectEl,'dark-select','filters-option');
// }
// }
//   checkTHeme(currentTheme)

const themeRefs = {
}

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', onChangeTheme);

function onChangeTheme(e) {
  document.body.classList.add('.dark-theme');
}