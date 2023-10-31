const engWord = document.querySelector("#eng");
const rusWord = document.querySelector("#rus");
const inputs = document.querySelectorAll(".input");
const addBtnWord = document.querySelector(".add-word");
const table = document.querySelector("#table");

let words;
let deleteWordBtn;

addBtnWord.addEventListener("click", () => {
  if (
    engWord.value.lenght < -1 ||
    rusWord.value.lenght < -1 ||
    !isNaN(engWord.value || rusWord.value)
  ) {
    for (const value of inputs) {
      value.classList.add("error-input");
    }
  } else {
    for (const value of inputs) {
      value.classList.remove("error-input");
    }
  }
});

const createWord = (englishWord, russianWord) => {
  this.englishWord = englishWord;
  this.russianWord = russianWord;
};
