import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const overlay = document.querySelector('.js-overlay-modal');
const orderForm = document.querySelector('.order-now-form');

orderForm.addEventListener('submit', onSubmitOrder);

function onSubmitOrder(e) {
  e.preventDefault();

  const dataPost = {
    name: orderForm.elements.name.value,
    phone: '+380' + orderForm.elements.phone.value,
    email: orderForm.elements.email.value,
    comment: orderForm.elements.comment.value,
  };
  axios
    .post('https://tasty-treats-backend.p.goit.global/api/orders/add', dataPost)
    .then(() => {
      Notify.success(
        'The form has been sent successfully! A manager will contact you shortly.'
      );
      var parentModal = this.closest('.modal');
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
      e.currentTarget.reset();
    })
    .catch(function (error) {
      Notify.warning(`${error.response.data.message}`);
    });
}
