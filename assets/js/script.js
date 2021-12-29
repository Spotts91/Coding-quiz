var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highScore = 50;
var finalAnswerCheck = 0;
var checkTimes = 1;
var viewHighScoresBtnEl = document.getElementById('view-high-scores');
var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');
var submitScoreEl = document.getElementById('submitScore');
var questionsEl = document.getElementById('questions');
var mainDivEl = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong');
var questionDisplayEl = document.createElement("questionDisplay");
var finalScoreDisplayEl = document.createElement("finalScoreDisplay");
var enterInitialsEl = document.createElement("enterInitials");
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
var button1234 = document.createElement("button");
var timeLeft = 60;

// Do not diplay anything that is not ready to be displayed
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterInitialsTextArea.style.display = 'none';

var questionsObject = { // Object that holds correct answer.
    correct:{
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following",
        3 : "A very useful tool to debug arrays is:",
        4 : "Strings must be enclosed with:"
    }
};

var answerObject = {// Object that holds correct answers
    answers: {
        0 : {
            0:"Strings",
            1:"Boolean",
            2:"Alerts",
            3:"Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : {
            0: "Javascript",
            1: "Terminal/bash",
            2: "For Loops",
            3: "Console.log"},
        3 : {
            0: "Commas",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Parentheses"},
        4 : {
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},
    }
};
