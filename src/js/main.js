document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerCloseIcon = document.querySelector(".burger-close-icon");
  const burgerContainer = document.querySelector(".burger-container");

  burgerIcon.addEventListener("click", function () {
    burgerContainer.classList.remove("hidden");
  });
  burgerCloseIcon.addEventListener("click", function () {
    burgerContainer.classList.add("hidden");
  });
});
