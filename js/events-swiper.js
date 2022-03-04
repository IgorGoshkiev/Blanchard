let eventSlider = new Swiper(".section-events__swiper-list", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: ".section-events__swiper-arrow-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".section-events__swiper-btn-next",

  },


  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 1,
      pagination: {
        el: '.section-events__swiper-bullets-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    576: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 33,
      pagination: {
        el: '.section-events__swiper-bullets-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32,
      pagination: {
        el: '.section-events__swiper-bullets-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    1023: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27,
      pagination: {
        el: '.section-events__swiper-bullets-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
      pagination: {
        el: '.section-events__swiper-bullets-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }



});
