const sliderDiv = document.querySelector(".slider_wrapper");
const buttons = document.querySelectorAll("[data-button]");

//
// ავღმოშმავთ არის თუ არა სლაიდერი ფოკუსში.
// ღილაკზე დაჭერისას ცვლადი ხდება ჭეშმარიტი - ამ შემთხვევაში კი აუტომატური სლაიდერი ჩერდება.
// 5 წამის შემდეგ ცვლადი უბრუნდება მცდარ მნიშვნელობას. იხ.ხაზ 54.
//
let isFocused = false;

//
// ფუნქცია, რომლითაც ვიგებთ აქტიურ და მომდევნო სლაიდს.
// მომდევნო სლაიდის active ატრიბუტს ენიჭება ჭეშმარიტი მნიშვნელობა, ხოლო ამჟამინდელს მცდარი.
// ფუნქციას გადაეცემა ერთი არგუმენტი iterator, რაც განკარგავს იმას თუ როგორ შეიცვლება შემდეგი სლაიდერის ინდეექსი.
// აუტო სლაიდერის დროს იტერატორი ყოველთვის ერთია, ხოლო ღილაკზე დაჭერისას ის შეიძლება გახდეს 1 ან -1.
//
const slideSetter = (iterator) => {
  const activeSlide = document.querySelector("[data-active]");
  const slides = document.querySelectorAll(".slider");

  const activeSlideIdx = Array.from(slides).indexOf(activeSlide);
  let nextSlideIdx = activeSlideIdx + iterator;

  if (nextSlideIdx == slides.length) {
    nextSlideIdx = 0;
  } else if (nextSlideIdx < 0) {
    nextSlideIdx = slides.length - 1;
  }

  delete slides[activeSlideIdx].dataset.active;
  slides[nextSlideIdx].dataset.active = true;
};

//
// ხდება შემოწმება ფოკუსის ცვლადისა.
// თუ ჭეშმარიტია ვწყვეტთ აუტომატურ სლაიდინგს.
// წინააღმდეგ შემთხვევაში კი ვაგრძელებთ ჩვეულებრივად
//
const slideInterval = setInterval(() => {
  if (isFocused) {
    return;
  } else {
    slideSetter(1);
  }
}, 3500);

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
