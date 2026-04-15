import { useEffect } from 'react';

function ComputerThrow({ playerThrow , onComputerThrow}) {
    const cpuThrowArr = ["rock", "paper", "scissors"];
    let index = 0;

    function shuffle() {
        const cpuThrow = document.getElementById("cpu-choice");
        const cpuTimer = setInterval(cpuChoice, 500);

        setTimeout(function () {
            const randomIndex = Math.floor(Math.random() * cpuThrowArr.length);
            const ComputerChoice = cpuThrowArr[randomIndex];
            cpuThrow.src = "images/" + cpuThrowArr[randomIndex] + ".PNG";
            clearInterval(cpuTimer);
            cpuThrow.style.border = "2px solid blue";

            onComputerThrow(ComputerChoice);
        }, 3000);
    }

    function cpuChoice() {
        const cpuThrow = document.getElementById("cpu-choice");
        cpuThrow.src = "images/" + cpuThrowArr[index] + ".PNG";
        index++;
        if (index >= cpuThrowArr.length) {
            index = 0;
        }
    }

    useEffect(() => {
        if (playerThrow) {
            shuffle();
        }
    }, [playerThrow]);

    return (
        <>
            <h2>CPU Choice:</h2>
            <article id="cpu-opt">
                <img id="cpu-choice" src="images/question-mark.PNG" alt="" />
            </article>
        </>
    );
}

export default ComputerThrow;