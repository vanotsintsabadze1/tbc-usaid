const sliderDiv = document.querySelector(".slider_wrapper");
const buttons = document.querySelectorAll("[data-button]");

// This variable is used to determine whether the user is focused on the slider or not.
// If the user is focused on the slider, the automatic sliding will stop for 5 seconds.
// If the user is not focused on the slider, the automatic sliding will continue.

let isFocused = false;

// slideSetter functions lets us delete a data attribute from the active slide and dot, and add it to the active elements.
// The function takes one argument, iterator, which determines how the next slide will be selected.
// The iterator is always 1 when the slider is automatic, but when the user clicks on the button, it can be either 1 or -1.
// The iterator is used to determine the next slide and dot index.

const slideSetter = (iterator) => {
  const slides = document.querySelectorAll(".slider");
  const dots = document.querySelectorAll(".slider_dot");
  const activeSlide = document.querySelector("[data-active]");
  const activeDot = document.querySelector("[data-dot-active]");

  const activeSlideIdx = Array.from(slides).indexOf(activeSlide); // Array.from() is used, since NodeList can't be used with indexOf() method.
  const activeDotIdx = Array.from(dots).indexOf(activeDot);

  let nextDotIdx = activeDotIdx + iterator;
  let nextSlideIdx = activeSlideIdx + iterator;

  if (nextSlideIdx == slides.length && nextDotIdx == dots.length) {
    nextSlideIdx = 0;
    nextDotIdx = 0;
  } else if (nextSlideIdx < 0 && nextDotIdx < 0) {
    nextSlideIdx = slides.length - 1;
    nextDotIdx = dots.length - 1;
  }

  delete slides[activeSlideIdx].dataset.active;
  delete dots[activeDotIdx].dataset.dotActive;
  slides[nextSlideIdx].dataset.active = true;
  dots[nextDotIdx].dataset.dotActive = true;
};

// We check the state of isFocused variable.
// If it is true, we return from the function.
// If it is false, we call slideSetter function with iterator 1.

setInterval(() => {
  if (isFocused) {
    return;
  } else {
    slideSetter(1);
  }
}, 3500);

// When we click on the button, we set isFocused to true, so the automatic sliding will stop for 5 seconds.
// Then we call slideSetter function with iterator 1 or -1, depending on which button was clicked.
// Then we set isFocused to false again, so the automatic sliding will continue.

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    isFocused = true;
    let iterator = button.classList.contains("slider_button_right") ? 1 : -1;

    slideSetter(iterator);

    setTimeout(() => {
      isFocused = false;
    }, 5000);
  });
});
