
let publicationsSlider = new Swiper(".section-publications__swiper", {

  pagination: {
    el: ".publications-swiper-pagination",
    type: "fraction",
  },

  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: ".section-publications__swiper-next",
    prevEl: ".section-publications__swiper-prev"
  },

  a11y: false

});
