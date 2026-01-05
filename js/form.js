const form = document.querySelector('[data-js="form"]');
const newCard = document.querySelector('[data-js="new-card"]');
const inputQuestion = document.querySelector('[data-js="form-question"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const inputAnswer = document.querySelector('[data-js="form-answer"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const cardQuestion = formElements.formQuestion.value;
  const cardAnswer = formElements.formAnswer.value;
  const cardTag = formElements.formTag.value;

  newCard.innerHTML = `
  <article class="card">
        <button class="card__bookmark" data-js="bookmark">
            <img src="assets/bookmark.svg" alt="a bookmark icon" data-js="bookmark-img"/>
        </button>
          <h2 data-js="question"></h2>
          <h3 class="card__answer card__answer--hidden" data-js="answer"></h3>
          <button class="card__button" data-js="answer-button">
            Show Answer
          </button>
          <ul class="card__tags">
            <li data-js="tag"></li>
          </ul>
    </article>
`;
  const cardQuestionText = document.querySelector('[data-js="question"]');
  cardQuestionText.textContent = cardQuestion;

  const cardAnswerText = document.querySelector('[data-js="answer"]');
  cardAnswerText.textContent = cardAnswer;

  const cardTagText = document.querySelector('[data-js="tag"]');
  cardTagText.textContent = cardTag;

  //toggle
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
});

inputQuestion.addEventListener("input", (event) => {
  inputCharacters = inputQuestion.value.length;
  let remainingCharacters = 150 - inputCharacters;
  questionCounter.textContent = remainingCharacters + " characters left";
});
inputAnswer.addEventListener("input", (event) => {
  inputCharacters = inputAnswer.value.length;
  let remainingCharacters = 150 - inputCharacters;
  answerCounter.textContent = remainingCharacters + " characters left";
});
