import React from 'react'
import GameState from './GameState';

export default function GameOver({ gameState }) {

    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerOWins:
            return <>
                <div className='game-over'>0 Wins</div>
            </>
        case GameState.playerXWins:
            return <>
                <div className='game-over'>X Wins</div>
            </>
        case GameState.draw:
            return <>
                <div className='game-over'>Draw</div>
            </>
        default:
            return <></>
    }

}
