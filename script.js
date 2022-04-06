// setting variables for quiz questions and answers
var questionBank = [
    {
        title: "Who invented Bitcoin?",
        choices: ["David Schwartz", "the Winklevoss twins", "Craig Wright", "Satoshi Nakamoto"],
        answer: 3,
    },
    {
        title: "What year was Bitcoin invented?",
        choices: ["2000", "2005", "2009", "2013"],
        answer: 2,
    },
    {
        title: "Which type of network consensus protocol does the Bitcoin blockchain use?",
        choices: ["proof-of-stake", "proof-of-work", "proof-of-space", "proof-of-elapsed-time"],
        answer: 1,
    },
    {
        title: "How many Bitcoin tokens will ever be created?",
        choices: ["1 million", "8 million", "15 million", "21 million"],
        answer: 3,
    },
    {
        title: "Roughly how many different cryptocurrencies are there in existence today?",
        choices: ["100", "500", "5000", "18000"],
        answer: 3,
    },
    {
        title: "Which property does Bitcoin NOT possess?",
        choices: ["fungible", "decentralized", "portable", "freezable"],
        answer: 3,
    },
];

var score = 0;
var seconds = 75;
var userInitial = "";

var startButtonEl = document.querySelector(".startButton");
var infoEl = document.querySelector(".info");
var containerEl = document.querySelector(".container");
var countDownEl = document.querySelector("#time");
var questionnaireEl = document.querySelector("#questionnaire");
var choicesEl = document.querySelector("choices");
var resultsEl = document.querySelector("#results");
var submitButtonEl = document.querySelector ("#submitButton");
var highScoresEl = document.querySelector ("#highScores");
var initialContainer = document.querySelector("#initials");
var finalScoreEl = document.querySelector("#finalScore");
var initialScoreStorage = JSON.parse(localStorage.getItem("savedInitials")) || [];

// function to start quiz once start button is clicked and start timer, hide info/intro section
if (startButtonEl) {
    startButtonEl.addEventListener("click", function(event) {
      event.preventDefault();
      infoEl.setAttribute("class", "hide");
      startCountdown();
      showQ(0);
    });
}

// creating div, ul, li elements and appending to HTML
function showQ(idx) {
    if (questionnaireEl.firstChild) {
        questionnaireEl.removeChild(questionnaireEl.firstChild);
    }
    if (idx >= questionBank.length) {
        displayRes();
    } else {
        var currQ = questionBank[idx];
        var currQDiv = document.createElement("div");
        var currQText = document.createTextNode(currQ.title);
        var currCul = document.createElement("ul");
    
        for (let i = 0; i < currQ.choices.length; i++) {
            var currCli = document.createElement("li");
            var currCText = document.createTextNode(currQ.choices[i]);
            currCli.appendChild(currCText);
            currCli.onclick = function() {
                if (i === currQ.answer) {
                    score++;
                    alert("You are correct!");
                } else {
                    seconds -=10;
                    alert("You are incorrect! 10 seconds have been deducted from timer.");
                }
                showQ(idx + 1);
            }
            currCul.appendChild(currCli);
        }
    
        currQDiv.appendChild(currQText);
        currQDiv.appendChild(currCul);
    
        questionnaireEl.append(currQDiv);
    }
}

function displayRes() {
    if (questionnaireEl.firstChild) {
        questionnaireEl.removeChild(questionnaireEl.firstChild);
    }
    resultsEl.hidden = false;
    finalScoreEl.innerHTML = score + " out of 6 correct";
}

// timer countdown function
function startCountdown() {
    countDownEl.textContent = seconds + " seconds remaining";
    var countDown = setInterval(function() {
        seconds--;
        countDownEl.textContent = seconds + " seconds remaining";
        if (seconds <= 0) {
            clearInterval(countDown);
            displayRes();
        }
    }, 1000);
}

// local storage function after user submits initials
submitButton.addEventListener("click", function(event) {
    var initials = document.querySelector("#initials").value;
    var finalScore =  score
    
    if (initials === "") {
        alert("This field cannot be blank", "error")
    } else {
        var playerData = {
            initial:initials, 
            score:finalScore
        }
        initialScoreStorage.push(playerData)
        localStorage.setItem("savedInitials", JSON.stringify(initialScoreStorage))
        window.location.href = "highscores.html"
    }
})
