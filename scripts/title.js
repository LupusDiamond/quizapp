/// Category title functionality
const categorySelected = localStorage.getItem("Category");
const catText = document.querySelector(".category-text");
catText.innerHTML = categorySelected;
