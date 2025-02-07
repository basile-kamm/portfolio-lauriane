const translations = {
  en: {
    bannerSubtitle: "Student",
  },
  fr: {
    bannerSubtitle: "Élève",
  },
};

const languageSelectors = document.querySelectorAll('input[name="language"]');

languageSelectors.forEach((lgSelect) => {
  lgSelect.addEventListener("change", (event) => {
    setLanguage(event.value);
    console.log("ye");
  });
});

const setLanguage = (language) => {
  if (language == "fr") {
    console.log(language);
  } else if (language == "en") {
    console.log(language);
  }
};

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
