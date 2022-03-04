
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-solutions__btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".nav-solutions__simplebar-container");

      document.querySelectorAll(".nav-solutions__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("nav-solutions__btn--active");
        }
      });

      document.querySelectorAll(".nav-solutions__simplebar-container").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--dropdown-item");
        }
      })
      dropdown.classList.toggle("active-list--dropdown-item");
      btn.classList.toggle("nav-solutions__btn--active")
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".nav-solutions__list")) {
      document.querySelectorAll(".nav-solutions__simplebar-container").forEach(el => {
        el.classList.remove("active-list--dropdown-item");
      })
      document.querySelectorAll(".nav-solutions__btn").forEach(el => {
        el.classList.remove("nav-solutions__btn--active");
      });
    }
  })

})
