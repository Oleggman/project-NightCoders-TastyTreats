const navLinks = document.querySelectorAll('.link-list-header');
const currentPath = window.location.pathname;

for (const link of navLinks) {
    if (link.href.includes(currentPath)) {
        link.classList.add("active-page");
        break;
    }
}