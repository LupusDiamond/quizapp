/// Modal functionality
const mdl = document.querySelector(".mdl");
const bg = document.querySelector(".main");
function openModal(correct) {
  mdl.querySelector(".big-square").classList.remove("bg-red-500");
  mdl.querySelector(".big-square").classList.remove("bg-green-500");
  mdl.querySelector(".big-square").classList.remove("bg-white");
  if (correct) {
    mdl.querySelector(".big-square").classList.add("bg-green-500");
    mdl.querySelector("h1").innerHTML = "CORRECT!";
    document.querySelector("#tick").classList.remove("hidden");
    mdl.querySelector("h1").classList.add("text-white");
  } else {
    mdl.querySelector(".big-square").classList.add("bg-red-400");
    mdl.querySelector("h1").innerHTML = "WRONG!";
    document.querySelector("#cross").classList.remove("hidden");
    mdl.querySelector("h1").classList.add("text-white");
    console.log("hellooo");
  }

  mdl.id = "scale1";
  bg.classList.add("blur");
}

function closeModal() {
  mdl.id = "";
  bg.classList.remove("blur");
  document.querySelector("#tick").classList.add("hidden");
  document.querySelector("#cross").classList.add("hidden");
  loadNextQuestion();
  resetTimer();
}
