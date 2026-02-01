const menu = document.querySelector(".menu");
const burgerOpen = document.querySelector(".header__icon");
const burgerClose = document.querySelector(".menu__close");

burgerOpen.addEventListener("click", function () {
  menu.classList.add("active");
  burgerClose.classList.add("active");
});

burgerClose.addEventListener("click", function () {
  menu.classList.remove("active");
  burgerClose.classList.remove("active");
});
