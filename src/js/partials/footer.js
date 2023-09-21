const openTeamModalBtn = document.getElementById("open-team-modal");
const modalTeam = document.querySelector(".modal-team");
const teamBackdrop = document.querySelector(".modal-team-backdrop");
const teamModalClose = document.querySelector(".team-modal-close");


openTeamModalBtn.addEventListener('click', handlerOpenTeamModal);
function handlerOpenTeamModal() {
    modalTeam.style.display = "block";
    teamBackdrop.style.display = "block";

}

teamModalClose.addEventListener('click', handlerCloseTeamModal);
function handlerCloseTeamModal() {
    modalTeam.style.display = "none";
    teamBackdrop.style.display = "none";
}








