// JavaScript Document

function resetGuess() {
    numberOfGuesses = 5;
    numberToGuess = generateNumberToGuess();
    document.getElementById("guess").value = "";
    document.getElementById("guessoutput").innerHTML = "";
    document.getElementById("guesshistory").innerHTML = "";
    previousGuesses = [];
    document.body.style.backgroundColor = "transparent";
}

function generateNumberToGuess() {
    return Math.floor((Math.random() * 100) + 1);
}

resetGuess();

function submitGuess() {
    var guess = document.getElementById("guess").value;
    var guessOutput = document.getElementById("guessoutput");
    var guessHistory = document.getElementById("guesshistory");

    if (!isPreviousGuess(guess)) {
        if (guess == numberToGuess) {
            document.body.style.backgroundColor = "#E6E6E6";
            alert("Correct");
            resetGuess();
        } else if (guess > numberToGuess) {
            if (Math.abs(numberToGuess - guess) > 10) {
                guessOutput.innerHTML = "HIGH and COLD";
            } else {
                guessOutput.innerHTML = "HIGH and WARM";
            }
            guessHistory.innerHTML = guessHistory.innerHTML + "<br>Guess " + numberOfGuesses + ": " + guess;
            numberOfGuesses = numberOfGuesses - 1;
            if (numberOfGuesses == 0) {
                alert("Game Over");
                giveHint();
                resetGuess();
            }
        } else {
            if (Math.abs(numberToGuess - guess) > 10) {
                guessOutput.innerHTML = "LOW and COLD";
            } else {
                guessOutput.innerHTML = "LOW and WARM";
            }
            guessHistory.innerHTML = guessHistory.innerHTML + "<br>Guess " + numberOfGuesses + ": " + guess;
            numberOfGuesses = numberOfGuesses - 1;
            if (numberOfGuesses == 0) {
                alert("Game Over");
                giveHint();
                resetGuess();
            }            
        }
    }
}

function isPreviousGuess(guess) {
    for (var x = 0; x < previousGuesses.length; x++) {
        if (guess == previousGuesses[x]) {
            alert("Guess was already tried");
            return true;
        }
    }
    previousGuesses.push(guess)
    return false;
}

function giveHint() {
    alert("I was thinking of: " + numberToGuess);
}