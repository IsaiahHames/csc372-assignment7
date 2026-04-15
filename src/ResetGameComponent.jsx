import { useState, useEffect } from 'react';

function ResetGame({active, onReset}) {

    return (<>
        <article>
            <button onClick={onReset} id="reset-btn">Reset Game</button>
        </article>
    </>
    );
}
export default ResetGame;
