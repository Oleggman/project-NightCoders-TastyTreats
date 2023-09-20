const overlay = document.querySelector('.js-overlay-modal');
const orderForm = document.querySelector('.order-now-form');

orderForm.addEventListener('submit', onSubmitOrder);

function onSubmitOrder(e) {
  e.preventDefault();
  e.currentTarget.reset();
  
  var parentModal = this.closest('.modal');
  parentModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = "auto";
}