var clearScoreEl = document.querySelector("#clear")

//Get scores from local storage or set to an empty array
function displayHighScores(){
    var initialScoreStorage = JSON.parse(localStorage.getItem("savedInitials")) || []; //JSON.parse converts back to original array/object bc local storage only stores as strings

    //Append stored scores to highScores.html page under <ol>
    initialScoreStorage.forEach(userData => {
        var newli = document.createElement("li");
        newli.textContent = `${userData.initial} : ${userData.score}`
        document.querySelector("ol").append(newli)
    })
}

function clearScores() {
    window.localStorage.removeItem("savedInitials")
    window.location.reload()
}

displayHighScores()
clearScoreEl.addEventListener("click", clearScores)