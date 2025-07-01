// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const serviceSwiper = new Swiper(".about__slider", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  pagination: {
    el: ".about__slider-pagination",
    type: "progressbar",
  },
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
