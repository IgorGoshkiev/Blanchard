
let gallerySlider = new Swiper(".section-gallery__right-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  pagination: {
    el: ".section-gallery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".section-gallery__swiper-btn-next",
    prevEl: ".section-gallery__swiper-btn-prev"
  },


  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 1
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 33
    },

    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 33
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

});

