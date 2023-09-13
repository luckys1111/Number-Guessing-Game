document.addEventListener("DOMContentLoaded", function () {
    const guessButton = document.getElementById("guessButton");
    const newGameButton = document.getElementById("newGameButton");
    const resultText = document.getElementById("result");
    const guessInput = document.getElementById("guess");

    let tryCount = 0;
    let randomNumber = generateRandomNumber();

    guessButton.addEventListener("click", function () {
        const playerGuess = parseInt(guessInput.value);
        tryCount++;

        if (randomNumber === playerGuess) {
            resultText.textContent = `Correct! You Win! It took you ${tryCount} tries.`;
        } else if (randomNumber < playerGuess) {
            resultText.textContent = "Nope! The number is higher. Guess again.";
        } else {
            resultText.textContent = "Nope! The number is lower. Guess again.";
        }
    });

    newGameButton.addEventListener("click", function () {
        randomNumber = generateRandomNumber();
        guessInput.value = "";
        resultText.textContent = "";
        tryCount = 0;
    });

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
});