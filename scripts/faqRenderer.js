const questionCards = document.querySelectorAll(".question_card");

questionCards.forEach((questionCard) => {
  const tick = questionCard.querySelector(".tick_icon");

  tick.addEventListener("click", () => {
    const answerDiv = questionCard.querySelector(".answer_div");
    const answer = questionCard.querySelector(".answer_div .answer");
    answerDiv.classList.toggle("answer_div_active");
    answer.classList.toggle("answer_active");
    tick.classList.toggle("tick_icon_enable");
  });
});
