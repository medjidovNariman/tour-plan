const hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },
});