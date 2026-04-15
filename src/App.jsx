import { useState, useEffect } from 'react';
import PlayerThrow from './PlayerThrowComponent';
import ComputerThrow from './ComputerThrowComponent';
import ScoreBoard from './ScoreBoardComponent';
import ResultDisplay from './ResultDisplayComponent';
import ResetGame from './ResetGameComponent';
import './App.css'


function App() {
  const [active, setActive] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);



  function handlePlayerChoice(choice) {
    setActive(true);
    setPlayerChoice(choice);
  }

  function handleComputerChoice(choice) {
    setComputerChoice(choice);
  }

  function resetGame() {
    setActive(false);
    setPlayerChoice(null);
    setComputerChoice(null);
    const playerThrow = document.querySelector('#ply-opt .ply-btn[style*="border: 2px solid red"]');
    const cpuThrow = document.getElementById('cpu-choice');
    const resultText = document.getElementById('result-text');
    if (playerThrow) playerThrow.style.border = 'none';
    if (cpuThrow) cpuThrow.style.border = 'none';
    if (cpuThrow) cpuThrow.src = 'images/question-mark.PNG';
    if (resultText) resultText.textContent = 'Result:';
  }

  function handleScoreUpdate() {
    const resultText = document.getElementById("result-text").textContent;
    if (resultText.includes("You Win")) {
      setPlayerScore(prevScore => prevScore + 1);
    } else if (resultText.includes("Computer Wins")) {
      setComputerScore(prevScore => prevScore + 1);
    }
  }


  return (
    <>
      <header>
        <h1>Rock, Paper, Scissors Game</h1>
      </header>

      <main>
        <ScoreBoard playerChoice={playerChoice} computerChoice={computerChoice} />
        <PlayerThrow onPlay={(handlePlayerChoice)} active={active} />
        <ComputerThrow playerThrow={playerChoice} onComputerThrow={handleComputerChoice} />
        <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} />
        <ResetGame active={active} onReset={resetGame} />
      </main>
    </>
  )
}

export default App
