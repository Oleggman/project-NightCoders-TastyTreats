

const navigationLinks = document.querySelectorAll('.link-list-header');
const currentPath = '.' + window.location.pathname;

    const navigationLinksArray = Array.from(navigationLinks);
    const hasActiveLink = navigationLinksArray.some(link => link.getAttribute('href') === currentPath);

if (!hasActiveLink) {
    navigationLinksArray.forEach(link => {
        if (link.textContent === "Home") {
            link.classList.add('active-page');
        }
    });
} else {
    navigationLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-page');
        } else {
            link.classList.remove('active-page');
        }
    });
}

// const links = {
//     index: document.querySelector('.js-index'),
//     favorites: document.querySelector('.js-favorites'),
// }

// links.index.addEventListener('click', onChangeOnIndex);
// links.favorites.addEventListener('click', onChangeOnFavs);

// function onChangeOnIndex() {
//     if (location.href = "./favorites.html") {
//         links.favorites.classList.remove("active-page");
//         links.index.classList.add("active-page");
//     }
// }

// function onChangeOnFavs() {
//     if (location.href = "./index.html") {
//         links.index.classList.remove("active-page");
//         links.favorites.classList.add("active-page");
//     }
// }