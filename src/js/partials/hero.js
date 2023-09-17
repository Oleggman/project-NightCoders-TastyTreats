import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import TastyTreatsAPI from '../API/tasty-treats-api.js';
import { renderEvents } from '../renders/render-gallery.js';

const respApi = new TastyTreatsAPI();

const events = document.querySelector('.swiper-wrapper')

async function renderSlider() {
    const resp = await respApi.fetchEvents();
    
    events.innerHTML = renderEvents(resp.data);
    const swiper = new Swiper('.slider-events', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // mousewheel: true,
        autoplay: true,
        // Default parameters
        slidesPerView: 0.69,
        spaceBetween: 8,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 768px
          768: {
            slidesPerView: 0.8,
            spaceBetween: 16,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 0.8,
            spaceBetween: 16,
          },
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
  }
renderSlider();

  