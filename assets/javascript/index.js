import questionBank from "./Qbank";

let startBtn = document.querySelector("#strbtn");
let timer = document.querySelector("#timer");
let time = document.querySelector("#time");
var mainTimer = 6100;
var questionInit = 0;
var highscores = [];
var timeInterval = "";
var choices = document.querySelector("#Choices");
var correctAnswer = document.querySelector("#checkAnswer");
let decision = document.querySelector("#decision");
let main = document.querySelector("#container");
let question = document.querySelector("#question")
let highscore = document.querySelector("#hiddenhs");
let highscoreInput = document.querySelector("#initials");
let highscoreForm = document.querySelector("#highform");
let highscoreList = document.querySelector("#highlist");
let clearScore = document.querySelector("#clearscore");

