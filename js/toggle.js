const bookmark = document.querySelector('[data-js="bookmark"]');
const bookmarkImg = document.querySelector('[data-js="bookmark-img"]');
const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmark--checked");
  changeImage();
});

function changeImage() {
  if (bookmark.classList.contains("card__bookmark--checked")) {
    bookmarkImg.src = "assets/bookmark-checked.svg";
  } else {
    bookmarkImg.src = "assets/bookmark.svg";
  }
}

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--hidden");
  answerButton.classList.toggle("card__button--hide");
  changeAnswerButton();
});

function changeAnswerButton() {
  if (answerButton.classList.contains("card__button--hide")) {
    answerButton.innerHTML = "Hide Answer";
  } else {
    answerButton.innerHTML = "Show Answer";
  }
}
