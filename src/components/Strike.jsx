import React from 'react'

export default function Strike({ strikeClass }) {
    return (
        <>
            <div className={`${strikeClass} strike`}></div>
        </>
    )
}
