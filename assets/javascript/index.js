// Import Data From My Question Bank
// import questionBank from "./Qbank";
// console.log(questionBank)
// Declare Variables
var startBtn = document.querySelector("#strbtn");
var restartBtn = document.querySelector("#restartbtn");
var timer = document.querySelector("#timer");
var mainTimer = 61;
var questionInit = 0;
var highscores = [];
var timeInterval = "";
// var correctAnswer = document.querySelector("#checkAnswer");
var decision = document.querySelector("#decision");
var main = document.querySelector("#container");
// var questionEl = document.querySelector("#question")
var highscore = document.querySelector("#hiddenhs");
var highscoreInput = document.querySelector("#initials");
var highscoreForm = document.querySelector("#highform");
var highscoreList = document.querySelector("#highlist");
var clearScore = document.querySelector("#clearscore");
var questionDiv = document.querySelector("#question")
let questionCount = 0;

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
    main.setAttribute("id", "container");
    highscore.setAttribute("id", "hiddenhs")
    highscoreForm.setAttribute("id", "highform")
    mainTimer = 61;
    questionInit = 0;
    setTimer();
    setQuestion(questionBank[questionCount]);
    highscoreInput.disabled = false

}



function setQuestionText(questionText) {
    document.getElementById("question").textContent = questionText
}

function setQuestionChoices(question) {
    document.getElementById("question").textContent = questionBank[questionCount].questionText;

    var choiceContainer = document.getElementById("choices");
    choiceContainer.innerHTML = "";

    for (var i = 0; i < questionBank[questionCount].answerChoices.length; i++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = questionBank[questionCount].answerChoices[i];
        choiceBtn.addEventListener("click", function (event) {
        ChoiceMade(event.target);
        });
        choiceContainer.appendChild(choiceBtn);
    }
}


// function setQuestionChoices(choices) {
//     choices.innerHTML = " ";
//     for (var i in choices) {
//         var ansChoice = document.createElement("button");
//         ansChoice.addEventListener("click", function (event){
//         ChoiceMade(event.target);
//         });
//         var ansChoices = document.createTextNode(choices[i]);
//         decision.appendChild(ansChoices);
//         choices.appendChild(choices);
//     }
// }

function correctAnswer(answer) {
  return (
    answer ===
    questionBank[questionCount].answerChoices[
      questionBank[questionCount].correctAnswer
    ]
  );
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
    // var = correctAnswer = questionBank[questionCount].correctAnswer;
    if (target.textContent === questionBank[questionCount].answerChoices[correctAnswer]) {
        decision.textContent = decision.getAttribute("data-correct");
    } else {
        decision.textContent = decision.getAttribute("data-wrong");
        mainTimer -= 5;
    }
}

function incrementQuestion() {
    questionCount++;
    setQuestionText(questionBank[questionCount].questionText);
    setQuestionChoices(questionBank[questionCount]);
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



const questionBank = [
  {
    questionText: "What does the method split do to a string?",
    answerChoices: [
      "splits the last character off the string",
      "deconstructs the string and places it into an array",
      "splits the first character off the string",
      "splits the string into two user selected variables",
    ],
    correctAnswer: "deconstructs the string and places it into an array",
  },
  {
    questionText:
      "Where is the correct place to insert a JavaScript in an HTML document?",
    answerChoices: [
      "Both the <head> section and the <body> section are correct",
      "The bottom of the <body> section",
      "The <head> section",
      "The footer section",
    ],
    correctAnswer: "The bottom of the <body> section",
  },
  {
    questionText: 'How do you call a function named "myFunction"?',
    answerChoices: [
      "call myFunction()",
      "call function myFunction",
      "Call.myFunction()",
      "myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    questionText: "How can you add a comment in javaScript?",
    answerChoices: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment",
      "#This is a comment",
    ],
    correctAnswer: "//This is a comment",
  },
  {
    questionText: "How do you find the largest number of 2 and 4?",
    answerChoices: ["Math.Ceil(2,4)", "Math.max(2,4)", "ceil(2,4)", "top(2,4)"],
    correctAnswer: "Math.max(2,4)",
  },
  {
    questionText: "In JavaScript, the symbols + - * and / are:",
    answerChoices: [
      "operators",
      "expressions",
      "comparison operators",
      "None of the Above",
    ],
    correctAnswer: "operators",
  },
  {
    questionText:
      "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's javaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "Document",
  },
  {
    questionText: "In JavaScript, the expression x!=y returns false if:",
    answerChoices: [
      "the variables are equal",
      "x is less than y",
      "the variables are not equal",
      "None of the above",
    ],
    correctAnswer: "the variables are equal",
  },
  {
    questionText:
      "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "Window",
  },
  {
    questionText:
      'In JavaScript, what would be the proper form of address in the object hierarchy for the second element in a form called "info"?',
    answerChoices: [
      "document.info.elements[1]",
      "document.info.elements[2]",
      "document.forms.info.elements[2]",
      "info.elements[2]",
    ],
    correctAnswer: "document.info.elements[1]",
  },
]; 