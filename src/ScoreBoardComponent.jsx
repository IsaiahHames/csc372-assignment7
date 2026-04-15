import { useState, useEffect, use } from 'react';

function ScoreBoard({ playerChoice, computerChoice }) {

    function updateWinner() {
        let plyScore = document.getElementById("score-text").textContent.split("|")[0].split(":")[1].trim();
        let cpuScore = document.getElementById("score-text").textContent.split("|")[1].split(":")[1].trim();

        const scoreText = document.getElementById("score-text");
        if (playerChoice === computerChoice) {
                scoreText.textContent = `You: ${plyScore} | CPU: ${cpuScore}`;
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            plyScore = parseInt(plyScore) + 1;
            scoreText.textContent = `You: ${plyScore} | CPU: ${cpuScore}`;
        } else {
            cpuScore = parseInt(cpuScore) + 1;
            scoreText.textContent = `You: ${plyScore} | CPU: ${cpuScore}`;
        }
    }

    function resetScore() {
        const scoreText = document.getElementById("score-text");
        scoreText.textContent = "You: 0 | CPU: 0";
    }

    useEffect(() => {
        if (playerChoice && computerChoice) {
            updateWinner();
        }
    }, [playerChoice, computerChoice]);

    return (<>
        <article id="score">
            <h2>Score:</h2>
            <p id="score-text">You: 0 | CPU: 0 </p>
            <button id="reset-score" onClick={resetScore}>Reset Score</button>
        </article>
    </>
    );
}
export default ScoreBoard;
