const sliderDiv = document.querySelector(".slider_wrapper");
const buttons = document.querySelectorAll("[data-button]");

// ცვლადი აღნიშნავს არის თუ არა სლაიდერი ფოკუსში
// ჩვეულებრივ ის მცდარია, მაგრამ სლაიდერის ღილაკზე დაჭერისას ის ხდება ჭეშმარიტი.
// 5 წამის შემდეგ თუ მომხმარებელი არ დააჭერს ღილაკს, მაშინ ცვლადი უბრუნდება მცდარს.

let isFocused = false;

// ფუნქცია, რომლითაც ვიგებთ აქტიურ და მომდევნო სლაიდს.
// მომდევნო სლაიდის active ატრიბუტს ენიჭება ჭეშმარიტი მნიშვნელობა, ხოლო ამჟამინდელს მცდარი.
// ფუნქციას გადაეცემა ერთი არგუმენტი iterator, რაც განკარგავს იმას თუ როგორ შეიცვლება შემდეგი სლაიდერის ინდეექსი.
// აუტო სლაიდერის დროს იტერატორი ყოველთვის ერთია, ხოლო ღილაკზე დაჭერისას ის შეიძლება გახდეს 1 ან -1.
// ამავე ფუნქციაში ხდება აქტიური წერტილის შეცვლა იმავე ტექნიკით.

const slideSetter = (iterator) => {
  const slides = document.querySelectorAll(".slider");
  const dots = document.querySelectorAll(".slider_dot");
  const activeSlide = document.querySelector("[data-active]");
  const activeDot = document.querySelector("[data-dot-active]");

  const activeSlideIdx = Array.from(slides).indexOf(activeSlide); // Nodelist -> Array. რადგან შეგვეძლოს indexOf-ის გამოყენება.
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

// ხდება შემოწმება ფოკუსის ცვლადისა.
// თუ ჭეშმარიტია ვწყვეტთ აუტომატურ სლაიდინგს.
// წინააღმდეგ შემთხვევაში კი ვაგრძელებთ ჩვეულებრივად

setInterval(() => {
  if (isFocused) {
    return;
  } else {
    slideSetter(1);
  }
}, 3500);

// ღილაკზე დაჭერისას ავტომატური სლაიდინგი 5 წამით ითიშება.
// iterator იღებს მნიშვნელობას იმაზე დაყრდნობით თუ რომელ ღილაკს დააჭერს მომხმარებელი.
// მარცხენა = -1; მარჯვენა = 1;

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
