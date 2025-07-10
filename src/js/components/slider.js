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

const blogArticleSwiper = new Swiper(".blog__slider", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  pagination: {
    el: ".blog__slider-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".blog__slider-controls-next",
    prevEl: ".blog__slider-controls-prev",
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
