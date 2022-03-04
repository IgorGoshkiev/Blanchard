const swiper_project = new Swiper('.section-projects__swiper', {
  slidesPerView: 3,
  spaceBetween: 47,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
  navigation: {
    nextEl: ".section-projects__next",
    prevEl: ".section-projects__prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 33,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 48,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 49,
    }
  },

});




// const swiperPrev = document.getElementById('swiperPrev')
// const swiperNext = document.getElementById('swiperNext')

// swiperPrev.addEventListener('click', () => {
//   swiper_project.slidePrev();
// })
// swiperNext.addEventListener('click', () => {
//   swiper_project.slideNext();
// })


// swiperPrev.addEventListener('keyup', event => {
//   if (event.code === 'Enter') swiper_project.slidePrev();
// });

// swiperNext.addEventListener('keyup', event => {
//   if (event.code === 'Enter') swiper_project.slideNext();
// });


