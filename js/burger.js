document.querySelector(".header__btn-burger-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.querySelector(".header__enter-btn").classList.add("enter-btn-burger");

})
document.querySelector(".header__btn-burger-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  document.querySelector(".header__enter-btn").classList.remove("enter-btn-burger");
})

