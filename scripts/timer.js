const timerDOM = document.querySelector("#timer");

let secondsLeft = 30;

function resetTimer() {
  secondsLeft = 30;
  timerDOM.innerHTML = secondsLeft;
}

function timerClick() {
  secondsLeft--;
  if (secondsLeft < 1) {
    openModal(false);
  }
  timerDOM.innerHTML = secondsLeft;
}

resetTimer();

setInterval(timerClick, 1000);
