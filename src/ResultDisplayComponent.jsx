import { useState, useEffect } from 'react';

function ResultDisplay({playerChoice, computerChoice}) {

    function checkWinner() {

        const resultText = document.getElementById("result-text");
        if (playerChoice === computerChoice) {
            resultText.textContent = "Result: Tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            resultText.textContent = "Result: You Win!";
        } else {
            resultText.textContent = "Result: Computer Wins!";
        }
    }

    useEffect(() => {
        if (playerChoice && computerChoice) {
            checkWinner();
        }
    }, [playerChoice, computerChoice]);
    return (<>
    <article id="result">
        <h2 id="result-text">Result:</h2>
    </article>
    </>
    );
}
export default ResultDisplay;
