
document.addEventListener('DOMContentLoaded', function () {

  const steps = document.querySelectorAll('.section-catalog__flag-btn');

  steps.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      steps.forEach(function (step) {
        step == tabsBtn ? step.classList.add('section-catalog__link-flag--active') : step.classList.remove('section-catalog__link-flag--active')
      });
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.step').forEach(function (tabContent) {
        tabContent.classList.remove('step-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('step-active')

    })
  })
})


