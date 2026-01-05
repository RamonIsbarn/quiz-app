const toggleDarkmode = document.querySelector('[data-js="dark-mode-toggle"]');
const mainBody = document.querySelector('[data-js="html-body"]');

toggleDarkmode.addEventListener("click", () => {
  mainBody.classList.toggle("darkmode");
});
