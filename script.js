var questionArea = document.querySelector("#question-area");
var homeScreen = document.querySelector("#home");
var timer = document.querySelector("#timer");
var secondsLeft = 50;
var startBtn = document.querySelector("#startBtn");
var askQuestion = document.querySelector("#question-text");
//added buttons to the html because populating preexisting ones was easier than creating and deleting them each time a new question appeared
var a1 = document.querySelector("#answer1");
var a2 = document.querySelector("#answer2");
var a3 = document.querySelector("#answer3");
var a4 = document.querySelector("#answer4");
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

    //when timer reaches zero, it stops counting down,  and moves to highscore.html
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      localStorage.setItem("Score", secondsLeft);
      window.location.href = "highscore.html";
    }
  }, 1000);
}

//populates buttons with info grabbed from questions
function displayQuestion() {
  questionArea.style.display = "block";
  homeScreen.style.display = "none";
  askQuestion.textContent = questions[currentQuestionIndex].question;

  a1.innerHTML = questions[currentQuestionIndex].choices[0];
  a2.innerHTML = questions[currentQuestionIndex].choices[1];
  a3.innerHTML = questions[currentQuestionIndex].choices[2];
  a4.innerHTML = questions[currentQuestionIndex].choices[3];
}

//function to move on to the next question
function nextQuestion(answer) {
  //checks if answer is right. If not, subtract 10 seconds
  if (answer != questions[currentQuestionIndex].answerIndex) {
    secondsLeft -= 10;
  }
  //increases currentQuestionIndex by one which will produce next question
  currentQuestionIndex++;
  if (currentQuestionIndex > 4) {
    localStorage.setItem("Score", secondsLeft);
    window.location.href = "highscore.html";
  }
  displayQuestion();
}

//starts timer and brings buttons into view
function displayButtons() {
  setTime();
  a1.style.display = "block";
  a2.style.display = "block";
  a3.style.display = "block";
  a4.style.display = "block";
}

//calls both functions
startBtn.addEventListener("click", displayQuestion);
startBtn.addEventListener("click", displayButtons);
