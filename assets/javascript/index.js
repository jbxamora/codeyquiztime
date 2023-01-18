// Import Data From My Question Bank
import questionBank from "./Qbank";
console.log(questionBank)
// Declare Variables
var startBtn = document.querySelector("#strbtn");
var restartBtn = document.querySelector("#restartbtn");
var timer = document.querySelector("#timer");
var time = document.querySelector("#time");
var mainTimer = 61;
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


// Event Listener for Start Button 
startBtn.addEventListener("click", startQuiz);
// Start Quiz Function
function startQuiz() {
    startBtn.setAttribute("id", "displayQ")
    questionInit = 0;
    setTimer();
    setQuestionChoices(questionBank[questionCount]);
}

// Event Listener for Restart Button
restartBtn.addEventListener("click", restartQuiz);
// Restart Quiz Function
function restartQuiz() {
    mainTimer = 61;
    questionInit = 0;
    setTimer();
    setQuestion(questionBank[questionCount]);
    highscoreInput.disabled = false

}



function setQuestionText(questionText) {
    document.getElementById("question").textContent = questionText
}

function setQuestionChoices(Choices) {
    Choices.innerHTML = " ";
    for (var i in Choices) {
        var Choices = document.createElement("button");
        Choices.addEventListener("click", function (event){
            
        });
        var answerChoices = document.createTextNode(answerChoices[i]);
        decision.appendChild(answerChoices);
        answerChoices.appendChild(answerChoices);
    }
}

function ChoiceMade(target) {
    if (questionCount === questionBank.length - 1) {
        endQuiz();
        return;
    }
    checkAccuracy(target);
    incrementQuestion();
    var toastInterval = setInterval(function () {
        decision.textContent = "";
        clearInterval(toastInterval);
    }, 1000)
}

function checkAccuracy(target) {
    if (target.textContent === questionBank[questionCount].correctAnswer) {
        decision.textContent = decision.getAttribute("data-correct");
    } else {
        decision.textContent = decision.getAttribute("data-wrong");
        mainTimer -= 5;
    }
}

function incrementQuestion() {
    questionCount++;
    setQuestionText(questionBank[questionCount]);
}

highscoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var highscoreInput = highscoreInput.value.trim();
    if (highscoreInput === "") {
        return;
    }
    storeHighscore(highscoreInput);
    renderHighscore();
    mainTimer = 61;
    highscoreInput.value = "";
    highscoreInput.disabled = true;

});

function storeHighscore(initials) {
    highscores.push({
        initials,
        score: mainTimer,
    });
    highscores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function renderHighscore() {
    highscoreList.innerHTML = "";
    for (var highscore of highscores) {
        var li = document.createElement("li")
        li.textContent = highscore.initials + ": " + highscore.score;
        highscoreList.appendChild(li);
    }
}

function clearScore() {
    highscores = [];
    renderHighscore();
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

function endQuiz() {
    questionCount = 0;
    clearInterval(timeInterval);
}