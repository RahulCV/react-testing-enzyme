import React from 'react'

function Congats(props) {
    return (
        <div data-test="component-congrats">
            <span data-test="congrats-message">
{props.success?'Congratulations! You Gussed the Word!.':''}</span>
            
        </div>
    )
}

export default Congats;
