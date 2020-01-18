const pgbarDOM = document.querySelector(".pg-bar");

let currentProgress;

function loadProgress() {
  currentProgress = ((questionNumber - 1) / questionAmount) * 100;
  currentProgress += "%";
  pgbarDOM.style.width = currentProgress;
}
