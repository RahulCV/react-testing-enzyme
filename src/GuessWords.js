import React from 'react';
import PropTypes from 'prop-types';

function GuessWords(props) {
    return (
        <div data-test="component-gussed-words">
{            props.guessedWords.length?null:<span data-test="guess-instructions">try to guess the secreat word</span>
}        </div>
    )
}

GuessWords.propTypes ={
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            gussedWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired

}
export default GuessWords
