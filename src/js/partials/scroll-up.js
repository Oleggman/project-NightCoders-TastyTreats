const scrollUp = document.querySelector('.scroll-icon');

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollUp.classList.remove('scroll-hidden');
  } else {
    scrollUp.classList.add('scroll-hidden');
  }
};

scrollUp.onclick = () => {
  window.scrollTo(0, 0);
};
