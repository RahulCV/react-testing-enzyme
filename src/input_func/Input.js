import React from 'react'
import PropTypes from 'prop-types';

function Input({success,secretWord}) {
    const [currentGuess,setCurrentGuess]= React.useState('');
    if(success){
        return  <div data-test="component-input"></div>
    }
    return (
        <div data-test="component-input">
            <form action="" className="form-inline">
                <input type="text" data-test="input-box" className="mb-2 mx-sm-3" placeholder="enter guess" value={currentGuess}
                onChange={(event)=>setCurrentGuess(event.target.value)}
                />
                <button data-test="submit-button"
                className="btn btn-primary mb-2"
                onClick={(ev)=>{ev.preventDefault();setCurrentGuess("")}}
                >Sumbit</button>
            </form>
        </div>
    )
}


Input.propTypes ={
    secretWord: PropTypes.string.isRequired,
}
export default Input