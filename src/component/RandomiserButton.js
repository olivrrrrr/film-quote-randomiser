import React from 'react'

function RandomiserButton({onRandomiseOnClick}){

    return (
        <div>
            <button onClick={onRandomiseOnClick}>Randomise Quote</button>
        </div>
    )
}

export default RandomiserButton
