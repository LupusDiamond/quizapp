/// Score functionality

// Show Score on screen
const score = localStorage.getItem("Points");
document.querySelector("#score").innerHTML = "0" + score * 20;

// Save points
if (localStorage.getItem("Category") == "sports") {
  localStorage.setItem("points-sports", score);
}
if (localStorage.getItem("Category") == "movies") {
  localStorage.setItem("points-movies", score);
}
if (localStorage.getItem("Category") == "science") {
  localStorage.setItem("points-science", score);
}
if (localStorage.getItem("Category") == "literature") {
  localStorage.setItem("points-literature", score);
}
if (localStorage.getItem("Category") == "history") {
  localStorage.setItem("points-history", score);
}
if (localStorage.getItem("Category") == "technology") {
  localStorage.setItem("points-technology", score);
}

// Score animation

$(".count").each(function() {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 800,
        easing: "swing",
        step: function(now) {
          //if (now * 20 < 9) $(this).text("0" + Math.ceil(now) * 20);
          //else $(this).text(Math.ceil(now) * 20);
          $(this).text(Math.ceil(now));
        }
      }
    );
});
