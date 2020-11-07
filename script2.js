var score = localStorage.getItem("score");
var name = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var formHolder = document.querySelector("#form-holder");
var hsList = document.querySelector("#hslist");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("name", name);
  hsList.display.style = "block";
});
