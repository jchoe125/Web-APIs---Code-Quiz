var clearScoreEl = document.querySelector("#clear")

function displayHighScores(){
    var initialScoreStorage = JSON.parse(localStorage.getItem("savedInitials")) || []; 

    initialScoreStorage.forEach(userData => {
        var newli = document.createElement("li");
        newli.textContent = `${userData.initial} : ${userData.score}`
        document.querySelector("ol").append(newli)
    })
}

function clearScores() {SVGAnimatedPreserveAspectRatio
    window.localStorage.removeItem("savedInitials")
    window.location.reload()
}

displayHighScores()
clearScoreEl.addEventListener("click", clearScores)