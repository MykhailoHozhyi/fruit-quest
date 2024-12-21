// import Swiper from 'swiper';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoHeight: false,
  autoWidth: false,
  watchOverflow: false,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
