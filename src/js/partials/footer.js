const logoBtn = document.querySelector(".coders-btn");
const modalTeam = document.querySelector(".modal-team");
const teamBackdrop = document.querySelector(".modal-team-backdrop");

logoBtn.addEventListener('clic', handlerOpenTeam);
function handlerOpenTeam() {
    modalTeam.classList.add('active');
    teamBackdrop.classList.add('active');
}








// function handlerOpenRating() {
//     popupModal.classList.add('active');
//     popupBackdrop.classList.add('active');
  
//     ratingCloseBtn.addEventListener('click', handlerCloseRating);
//     popupBackdrop.addEventListener('click', handlerCloseRatingBackdrop);
//   }
  
//   // закриття модалки з рейтингом та видалення слухачів
  
//   function handlerCloseRating() {
//     popupModal.classList.remove('active');
//     popupBackdrop.classList.remove('active');
//     ratingCloseBtn.removeEventListener('click', handlerCloseRating);
//     popupBackdrop.removeEventListener('click', handlerCloseRatingBackdrop);
//   }
  
//   function handlerCloseRatingBackdrop() {
//     popupModal.classList.remove('active');
//     popupBackdrop.classList.remove('active');
//   }
  