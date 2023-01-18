// Import Data From My Question Bank
import questionBank from "./Qbank";
console.log(questionBank)
// Declare Variables
var startBtn = document.querySelector("#strbtn");
var restartBtn = document.querySelector("#restartbtn");
var timer = document.querySelector("#timer");
var time = document.querySelector("#time");
var mainTimer = 6100;
var questionInit = 0;
var highscores = [];
var timeInterval = "";
var choices = document.querySelector("#Choices");
var correctAnswer = document.querySelector("#checkAnswer");
var decision = document.querySelector("#decision");
var main = document.querySelector("#container");
var questionEl = document.querySelector("#question")
var highscore = document.querySelector("#hiddenhs");
var highscoreInput = document.querySelector("#initials");
var highscoreForm = document.querySelector("#highform");
var highscoreList = document.querySelector("#highlist");
var clearScore = document.querySelector("#clearscore");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.setAttribute("id", "displayQ")
    questionInit = 0;
    setTimer();
    setQuestionChoices(questionBank[questionCount]);
}
restartBtn.addEventListener("click", restartQuiz);

function restartQuiz() {
    mainTimer = 61;
    questionInit = 0;
    setTimer();
    setQuestion(questionBank[questionCount]);
    highscoreInput.disabled = false

}

highscoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var highscoreInput = highscoreInput.value.trim();
    if (highscoreInput === "") {
        return;
    }

})


function setQuestionText(questionText) {
    document.getElementById("question").textContent = questionText
}

function setQuestionChoices(Choices) {
    Choices.innerHTML = " ";
    for (var i in Choices) {
        var Choices = document.createElement("button");
        Choices.addEventListener("click", function (event){
           
        })
    }
}
function setTimer() {
    timeInterval = setInterval(function () {
        mainTimer--;
        timer.textContent = "Time Remaining: " + mainTimer;
        if (mainTimer === 0) {
            clearInterval(timeInterval);
            endQuiz();

        }
        
    }, 1000)
}