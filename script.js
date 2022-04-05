// setting variables for quiz questions and answers
var questions = [
    {
        title: "Who invented Bitcoin?",
        choices: ["David Schwartz", "the Winklevoss twins", "Craig Wright", "Satoshi Nakamoto"],
        answer: "Satoshi Nakamoto"
    },
    {
        title: "What year was Bitcoin invented?",
        choices: ["2000", "2005", "2009", "2013"],
        answer: "2009"
    },
    {
        title: "Which type of network consensus protocol does the Bitcoin blockchain use?",
        choices: ["proof-of-stake", "proof-of-work", "proof-of-space", "proof-of-elapsed-time"],
        answer: "proof-of-work"
    },
    {
        title: "How many Bitcoin tokens will ever be created?",
        choices: ["1 million", "8 million", "15 million", "21 million"],
        answer: "21 million"
    },
    {
        title: "Roughly how many different cryptocurrencies are there in existence today?",
        choices: ["100", "500", "5000", "18000"],
        answer: "18000"
    },
    {
        title: "Which property does Bitcoin NOT possess?",
        choices: ["fungible", "decentralized", "portable", "freezable"],
        answer: "freezable"
    },
];


var result = "";
var initials = "";
var score = 0;
var seconds = 76;
var currentQuestionIndex = 0


// creating variables for elements
var createlist = document.createElement("ul");

var startButtonEl = document.querySelector(".startButton");
var infoEl = document.querySelector(".info");
var containerEl = document.querySelector(".container");
var countDownEl = document.querySelector("#time");
var questionnaireEl = document.querySelector("#questionnaire");
var choicesEl = document.querySelector("choices");
var resultsEl = document.querySelector("#results");
var finalScoreEl = document.querySelector("#finalScore");
var submitButtonEl = document.querySelector ("#submitButton");

// function to start quiz once start button is clicked and start timer, hide info/intro section


if (startButtonEl) {
    startButtonEl.addEventListener("click", function(event) {
    //   event.preventDefault();
      infoEl.setAttribute("class", "hide");
      questionnaireEl.setAttribute("class", "");
      resultsEl.setAttribute("class", "hide");
      countDownTimer();
      showQuestions();
    });
}

// function for timer
function countDownTimer() {
    var timerInterval = setInterval(function() {
        seconds--;
        countDownEl.textContent = "Time Remaining: " + seconds + " seconds"
        if (seconds <= 0) {
            clearInterval(timerInterval);
            // function to end game
        }
    }, 1000);
}

function showQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
}

// function displayResult() {
//     resultsEl.removeAttribute("class", "hide");
//     seconds = 0;
//     finalScoreEl.textContent = score + "out of 6 questions correct!";
//     finalsubmit();

// }

// function finalsubmit() {
//     submitButtonEl.addEventListener("click", function(event) {
//         event.preventDefault();
//         user
//     }
//     )
// }


// if there's time, create function to set button to animate upon clicking the right answer
