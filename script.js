var questionArea = document.querySelector("#question-area");
var homeScreen = document.querySelector("#home");
var timer = document.querySelector("#timer");
var secondsLeft = 75;
var startBtn = document.querySelector("#startBtn");
var askQuestion = document.querySelector("#question-text");
var listEl = document.createElement("ul");

//question array to call on later when generating the questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    answerIndex: 2,
  },
  {
    question: "The condition in an if / else statement is enclosed within  __________.",
    choices: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
    answerIndex: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the above"],
    answerIndex: 2,
  },
  {
    question: "String values must be enclosed within ______ when  being assigned to variables.",
    choices: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parentheses"],
    answerIndex: 2,
  },
  {
    question:
      "A very useful tool  used during development and debugging for printing content to the debugger is:",
    choices: ["A. JavaScript", "B. Terminal/Bash", "C. For Loops", "D. Console Log"],
    answerIndex: 4,
  },
];

var currentQuestionIndex = 0;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time Remaining: " + secondsLeft;

    //when timer reaches zero, it stops counting down. quiz will not end, but score will be zero
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
function displayQuestion() {
  setTime();
  questionArea.style.display === "block";
  homeScreen.textContent = "";
  askQuestion.textContent = questions[currentQuestionIndex].question;
  for (i = 0; i < 4; i++) {
    listEl = document.createElement("button");
    listEl.innerHTML = questions[currentQuestionIndex].choices[i];
    listEl.setAttribute("id", i);
    questionArea.appendChild(listEl);
  }
}

listEl.addEventListener("click", nextQuestion);

function nextQuestion(event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    if (parseInt(event.target.id) === questions[currentQuestionIndex].answerIndex) {
      alert("wow");
    }
  }

  currentQuestionIndex++;
}
startBtn.addEventListener("click", displayQuestion);
