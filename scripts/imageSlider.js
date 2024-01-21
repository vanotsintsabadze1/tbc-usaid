const sliderButtons = document.querySelectorAll("[data-slider-button]");
const sliderNavigationDots = document.querySelectorAll(".slider_nav button");

let indexIterator = 1;
let activeIndex = 0;

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    indexIterator = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-slider-container]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    activeIndex = [...slides.children].indexOf(activeSlide);
    let newIndex = [...slides.children].indexOf(activeSlide) + indexIterator;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    sliderDotEnable();
    console.log(activeIndex);
  });
});
