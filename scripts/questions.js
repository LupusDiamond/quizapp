/// Questions functionality
let qObject, catObject, categories, qCategory;
let questionNumber = 0,
  questionAmount,
  correctIndex;
let pointsGained;

$.getJSON("../questions.json", function(json) {
  qObject = json;
}).done(function() {
  catObject = qObject[Object.keys(qObject)[0]];
  catObject = qObject[Object.keys(qObject)[0]];
  categories = catObject[Object.keys(catObject)[0]];
  switch (categorySelected) {
    case "sports":
      qCategory = catObject[Object.keys(catObject)[0]].sports;
      break;
    case "movies":
      qCategory = catObject[Object.keys(catObject)[1]].movies;
      break;
    case "science":
      qCategory = catObject[Object.keys(catObject)[2]].science;
      break;
    case "literature":
      qCategory = catObject[Object.keys(catObject)[3]].literature;
      break;
    case "history":
      qCategory = catObject[Object.keys(catObject)[4]].history;
      break;
    case "technology":
      qCategory = catObject[Object.keys(catObject)[5]].technology;
      break;
  }

  pointsGained = 0;
  questionAmount = qCategory.length;
  loadNextQuestion();
});

function loadNextQuestion() {
  questionNumber++;
  if (questionNumber > questionAmount) {
    loadEndScreen();
  }
  correctIndex = qCategory[questionNumber - 1].correctAnswer;

  // Get question text
  const questionText = document.querySelector(".question-text");
  questionText.innerHTML =
    "Q" + questionNumber + "." + " " + qCategory[questionNumber - 1].question;

  // Get answer text
  const answerTexts = document.querySelectorAll("[class^=option]");
  const letters = ["A", "B", "C", "D"];
  for (i = 0; i <= 3; i++) {
    answerTexts[i].innerHTML = "";
    answerTexts[i].innerHTML += letters[i] + ". ";
    answerTexts[i].innerHTML += qCategory[questionNumber - 1].answers[i];
  }
}
function CheckAnswer(index) {
  if (index == correctIndex) {
    pointsGained++;
    openModal(true);
  } else {
    openModal(false);
  }
}

function loadEndScreen() {
  window.location.href = "./end.html";
  localStorage.setItem("Points", pointsGained);
}
