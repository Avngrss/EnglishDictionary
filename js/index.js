const engWord = document.querySelector("#eng");
const rusWord = document.querySelector("#rus");
const inputs = document.querySelectorAll(".input");
const addBtnWord = document.querySelector(".add-word");
const table = document.querySelector("#table");

let words;
let deleteWordBtn;

localStorage.length < 1
  ? (words = [])
  : (words = JSON.parse(localStorage.getItem("words")));

const addWordToTable = (index) => {
  table.innerHTML += `
  <div class="d-flex justify-content-between gap-4 align-items-center">
    <div>
      <div class="eng-word">${words[index].englishWord}</div>
      <div class="rus-word">${words[index].russianWord}</div>
    </div>
    <div>
      <button class='btn-delete'></button>
    </div>
  </div>
  `;
};

words.forEach((value, i) => {
  addWordToTable(i);
});

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
    words.push(new СreateWord(engWord.value, rusWord.value));
    localStorage.setItem("words", JSON.stringify(words));
    addWordToTable(words.length - 1);
    engWord.value = "";
    rusWord.value = "";
  }
});

function СreateWord(englishWord, russianWord) {
  this.englishWord = englishWord;
  this.russianWord = russianWord;
}

const deleteWord = (e) => {
  const rowIndex = e.target.parentNode.parentNode;
  e.target.parentNode.parentNode.remove();
  words.splice(rowIndex, 1);
  localStorage.removeItem("words");
  localStorage.setItem("words", JSON.stringify(words));
  console.log(rowIndex);
};

const addEventDelete = () => {
  if (words.length > 0) {
    deleteWordBtn = document.querySelectorAll(".btn-delete");
    for (let btn of deleteWordBtn) {
      btn.addEventListener("click", (e) => {
        deleteWord(e);
      });
    }
  }
};
addEventDelete();
