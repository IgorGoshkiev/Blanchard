document.querySelector(".header__form-btn-open").addEventListener("click", function() {
  document.querySelector(".header__form-search-for-1020px").classList.add("form__active");
  document.querySelector(".header-container").classList.add("btn-close-form-search");
  this.classList.add("active");

  document.querySelector(".section-solutions").classList.add("section-solutions-active");
  document.querySelector(".header-container").classList.add("header-container-active");
  document.querySelector(".header__form-container").classList.add("form-container-width");
  document.querySelector(".header__btn-burger-open").classList.add("btn-burger-hide");
  document.querySelector(".header__logo").classList.add("header__logo-hide");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form-search-for-1020px");
  if (!target.closest(".header__form-container")) {
  form.classList.remove("form__active");

  document.querySelector(".section-solutions").classList.remove("section-solutions-active");
  document.querySelector(".header-container").classList.remove("header-container-active");
  document.querySelector(".header-container").classList.remove("btn-close-form-search");
  document.querySelector(".header__form-container").classList.remove("form-container-width");
  document.querySelector(".header__btn-burger-open").classList.remove("btn-burger-hide");
  document.querySelector(".header__logo").classList.remove("header__logo-hide");

    form.querySelector("input").value = "";
    document.querySelector(".header__form-btn-open").classList.remove("active")
  }
})

