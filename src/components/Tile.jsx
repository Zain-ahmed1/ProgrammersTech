import React from 'react'

function Tile({ className, value, onClick, playerTurn }) {

    let hoverClass = null;

    if (value == null && playerTurn != null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }

    return (
        <>
            <div onClick={onClick} className={`${className} ${hoverClass} text-current text-5xl font-regular flex justify-center items-center w-full h-full`}>
                {value}
            </div>
        </>
    )
}

export default Tile
