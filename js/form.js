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
