/// Categories functionality

// Save category
function saveCategory(cat) {
  localStorage.setItem("Category", cat);
}

/// Questions
let qObject, catObject, categories, qCategory;
let questionNumber = 0,
  questionAmount,
  correctIndex;
let pointsGained;

$.getJSON("../questions.json", function(json) {
  qObject = json;
}).done(function() {
  /// Get question amount for each category
  const categoriesDOM = document.querySelectorAll("#total");
  let questionsJSON;
  let i = 0;
  categoriesDOM.forEach(function(element) {
    questionsJSON = qObject[Object.keys(qObject)[0]];
    let currentCat = questionsJSON[Object.keys(questionsJSON)[i++]];
    currentCat = currentCat[Object.keys(currentCat)[0]];
    element.innerHTML = currentCat.length;
  });
});

/// Load Points

if (localStorage.getItem("points-sports") == null) {
  localStorage.setItem("points-sports", 0);
}
if (localStorage.getItem("points-movies") == null) {
  localStorage.setItem("points-movies", 0);
}
if (localStorage.getItem("points-science") == null) {
  localStorage.setItem("points-science", 0);
}
if (localStorage.getItem("points-literature") == null) {
  localStorage.setItem("points-literature", 0);
}
if (localStorage.getItem("points-history") == null) {
  localStorage.setItem("points-history", 0);
}
if (localStorage.getItem("points-technology") == null) {
  localStorage.setItem("points-technology", 0);
}

document.querySelectorAll("#score")[0].innerHTML = localStorage.getItem(
  "points-sports"
);
document.querySelectorAll("#score")[1].innerHTML = localStorage.getItem(
  "points-movies"
);
document.querySelectorAll("#score")[2].innerHTML = localStorage.getItem(
  "points-science"
);
document.querySelectorAll("#score")[3].innerHTML = localStorage.getItem(
  "points-literature"
);
document.querySelectorAll("#score")[4].innerHTML = localStorage.getItem(
  "points-history"
);
document.querySelectorAll("#score")[5].innerHTML = localStorage.getItem(
  "points-technology"
);
