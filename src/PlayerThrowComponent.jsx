import { useState, useEffect } from 'react';

function PlayerThrow({onPlay, active}) {
    function playGame(event) {
        if (active) return;

        const choice = event.currentTarget.querySelector('img').alt;

        onPlay(choice);

        event.currentTarget.style.border = "2px solid red";
    }

    return (<>
        <h2>Your Choice:</h2>
        <article id="ply-opt">
            <button onClick={playGame} className="ply-btn"> <img src="images/rock.PNG" alt="rock" /></button>
            <button onClick={playGame} className="ply-btn"> <img src="images/paper.PNG" alt="paper" /></button>
            <button onClick={playGame} className="ply-btn"> <img src="images/scissors.PNG" alt="scissors" /></button>
        </article>
    </>
    );
}
export default PlayerThrow;
