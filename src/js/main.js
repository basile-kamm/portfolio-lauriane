document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerCloseIcon = document.querySelector(".burger-close-icon");
  const burgerContainer = document.querySelector(".burger-container");
  const body = document.querySelector("body");

  burgerIcon.addEventListener("click", function () {
    burgerContainer.classList.remove("hidden");
    body.classList.add("no-scroll");
  });
  burgerCloseIcon.addEventListener("click", function () {
    body.classList.remove("no-scroll");
    burgerContainer.classList.add("hidden");
  });
});
