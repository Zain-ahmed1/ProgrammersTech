import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameState from './GameState';
import GameOver from './GameOver';
import ScoreBoard from './ScoreBoard';

const Player_X = "X";
const Player_O = "O";

const winningCombinations = [
    //Rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },

    //Columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },

    //Diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];



export default function TicTacToe() {

    const [tiles, setTiles] = useState(Array(9).fill(null)); // Blocks Starte
    const [playerTurn, setPlayerTurn] = useState(Player_X); // Player Turn
    const [strikeClass, setStrikeClass] = useState(""); // Striking Line Starte
    const [scoreX, setScoreX] = useState(0); // Score For Player X
    const [scoreO, setScoreO] = useState(0); // Score For Player 0
    const [gameState, setGameState] = useState(GameState.inProgress); //Checking GameState
    const [difficulty, setDifficulty] = useState("Medium"); // Bot Difficulty
    const [gameMode, setGameMode] = useState("PvP");
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (gameState === GameState.inProgress && gameMode === "PvBot" && playerTurn === "O" && !isProcessing) {
            setIsProcessing(true); // Disable during bot's calculation
            setTimeout(() => { // Simulate bot's "thinking" delay
                botMove();
                setIsProcessing(false);
            }, 500);
        }
    }, [playerTurn, gameState, gameMode, tiles]);

    const handleTileClick = (index) => {

        if (gameState !== GameState.inProgress || tiles[index] !== null || isProcessing) return;
        setIsProcessing(true); // Disable further clicks
        makeMove(index, playerTurn);
        setIsProcessing(false); // Re-enable after move is set

        if (gameState !== GameState.inProgress) {
            return;
        }

        if (tiles[index] !== null) {
            return
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        if (playerTurn === Player_X) {
            setPlayerTurn(Player_O);
        } else {
            setPlayerTurn(Player_X);
        }
    }

    const makeMove = (index, player) => {
        if (tiles[index] !== null) return; // Additional safeguard

        const newTiles = [...tiles];
        newTiles[index] = player;
        setTiles(newTiles);

        // Prevent further moves until this one is processed
        setPlayerTurn(prev => (prev === "X" ? "O" : "X"));
    };

    const findRandomMove = (tiles) => {
        const availableMoves = tiles.map((tile, index) => tile === null ? index : null).filter(index => index !== null);
        return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : -1;
    };

    const findCriticalMove = (tiles, player) => {
        for (const { combo } of winningCombinations) {
            const values = combo.map(index => tiles[index]);
            if (values.filter(val => val === player).length === 2 && values.includes(null)) {
                return combo[values.indexOf(null)];
            }
        }
        return -1;
    };

    const findMediumMove = (tiles) => {
        let move = findCriticalMove(tiles, "O"); // Check if bot can win
        if (move !== -1) return move;
        move = findCriticalMove(tiles, "X"); // Check if bot needs to block the player
        if (move !== -1) return move;
        return findRandomMove(tiles);
    };

    const findExpertMove = (tiles) => {
        // First, check for a winning move
        let move = findCriticalMove(tiles, "O");
        if (move !== -1) return move;

        // Next, check for a blocking move
        move = findCriticalMove(tiles, "X");
        if (move !== -1) return move;

        // Then try to take the center if it's available
        if (tiles[4] === null) return 4;

        // Prioritize corners over sides because they offer more winning opportunities
        const corners = [0, 2, 6, 8];
        const availableCorners = corners.filter(index => tiles[index] === null);
        if (availableCorners.length > 0) {
            return availableCorners[Math.floor(Math.random() * availableCorners.length)];
        }

        // Lastly, take any remaining available move
        return findRandomMove(tiles);
    };

    const decideMove = (tiles, difficulty) => {
        switch (difficulty) {
            case "Easy":
                return findRandomMove(tiles);
            case "Medium":
                return findMediumMove(tiles);
            case "Expert":
                return findExpertMove(tiles);
            default:
                return findRandomMove(tiles);
        }
    };

    const botMove = () => {
        const move = decideMove(tiles, difficulty);
        if (move !== -1) {
            setTimeout(() => makeMove(move, "O"), 500);
        }
    };

    useEffect(() => {
        checkWinner(tiles, setStrikeClass);
    }, [tiles])

    function checkWinner() {
        for (const { combo, strikeClass } of winningCombinations) {
            const tileValue1 = tiles[combo[0]];
            const tileValue2 = tiles[combo[1]];
            const tileValue3 = tiles[combo[2]];

            if (
                tileValue1 !== null &&
                tileValue1 === tileValue2 &&
                tileValue1 === tileValue3
            ) {
                setStrikeClass(strikeClass);

                if (tileValue1 === Player_X) {
                    setGameState(GameState.playerXWins);
                    setScoreX(scoreX + 1);
                } else {
                    setGameState(GameState.playerOWins);
                    setScoreO(scoreO + 1);
                }
                return;
            }
        }

        const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
        if (areAllTilesFilledIn) {
            setGameState(GameState.draw)
        }
    }

    function endGame() {
        setTiles(Array(9).fill(null));
        setGameState(GameState.inProgress);
        setStrikeClass("");
        setPlayerTurn(Player_X);
    }

    function resetGame() {
        setTiles(Array(9).fill(null));
        setGameState(GameState.inProgress);
        setPlayerTurn(Player_X);
        setScoreX(0);
        setScoreO(0);
        setStrikeClass("");
    }

    useEffect(() => {
        endGame();
    }, [gameMode, difficulty]);

    return (
        <>
            <div className='w-full pb-10 text-center'>
                <div className='pb-8 w-full text-center'>
                    <h1 className='text-4xl font-bold text-white/80 mt-12 pb-4'>Welcome to Tic-Tac-Toe</h1>
                    <p className='text-lg text-center'>Are you smarter than Bot?</p>
                </div>
                <div className='mb-4 w-full flex justify-start'>
                    <label htmlFor="gameMode" className='text-lg text-white/60 self-center'>Game Mode: &nbsp;</label>
                    <select className='text-white/80 bg-gray-800 border border-gray-500 px-2 w-1/2 py-2'
                        value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
                        <option value="PvP">Player vs Player</option>
                        <option value="PvBot">Player vs Bot</option>
                    </select>
                </div>
                {gameMode === "PvBot" && (
                    <div className='w-full flex justify-start'>
                        <label htmlFor="difficulty" className='text-lg text-white/60 pr-5 self-center'>Difficulty: &nbsp;</label>
                        <select className='text-white/80 bg-gray-800 border border-gray-500 px-2 w-1/2 py-2'
                            id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>
                )}
            </div>
            <ScoreBoard scoreX={scoreX} scoreO={scoreO} />
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} disabled={isProcessing} />
            <GameOver gameState={gameState} />
            <div className="flex justify-center space-x-4 mt-12 pb-12">
                <button onClick={endGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Game</button>
                <button onClick={resetGame} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset All</button>
            </div>
        </>
    )
}
