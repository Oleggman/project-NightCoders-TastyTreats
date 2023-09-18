

const navigationLinks = document.querySelectorAll('.link-list-header');
const currentPath = window.location.pathname;
    console.log(currentPath);

    const navigationLinksArray = Array.from(navigationLinks);
    const hasActiveLink = navigationLinksArray.some(link => link.getAttribute('href') === currentPath);
console.log(hasActiveLink);

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