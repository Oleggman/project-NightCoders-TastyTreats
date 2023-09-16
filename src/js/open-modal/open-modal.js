const burgerMenu = document.querySelector('.js-burger-menu');
const openBtn = document.querySelector('.js-open-burger-menu');
const closeBtn = document.querySelector('.js-close-burger-menu');

 openBtn.addEventListener("click", function () {
        burgerMenu.classList.toggle("is-open");
    });

 closeBtn.addEventListener("click", function () {
        burgerMenu.classList.toggle("is-open");
 });
    


