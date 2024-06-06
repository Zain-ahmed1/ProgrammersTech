// ScoreBoard.jsx
import React from 'react';

export default function ScoreBoard({ scoreX, scoreO }) {
    return (
        <div className="flex justify-between space-x-4 mb-12">
            <div>
                <h1 className='text-xl font-medium'>Player X:&nbsp;&nbsp; <span>{scoreX}</span></h1>
            </div>
            <div>
                <h1 className='text-xl font-medium'>Player O:&nbsp;&nbsp; <span>{scoreO}</span></h1>
            </div>
        </div>
    );
}
