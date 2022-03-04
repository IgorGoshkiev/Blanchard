
document.addEventListener('DOMContentLoaded', function () {

  const linksteps = document.querySelectorAll('.section-catalog__accordion-content-link');

  linksteps.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-catalog__article').forEach(function (tabContent) {
        tabContent.classList.remove('section-catalog__article-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__article-active')
    })

  })
})



