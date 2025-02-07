import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  loader.classList.add("hidden");

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});

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
  if (window.screen.width <= 678) {
    const cards = gsap.utils.toArray(".work-card");

    cards.forEach((card) => {
      gsap.to(card.querySelector(".work-card-image"), {
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          end: "bottom 70%",
          toggleClass: "is-active",
          markers: true,
        },
      });
    });
  }
});
