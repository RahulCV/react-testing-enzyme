import React from 'react';
import PropTypes from 'prop-types';

function GuessWords(props) {
    const geneRateRows= props.guessedWords.map((word,index)=>(
        <tr key={index} data-test="guessed-word">
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>

        </tr>
    ))
    return (
        <div data-test="component-guessed-words">
{            props.guessedWords.length?<div data-test="guessed-words">

    <h3>Guessed Words</h3>
    <table className="table table-sm">
        <thead className="thead-light">
            <tr>
                <th> Guess  
                </th>
                <th>Matching Letters
                </th>
                </tr>
                {geneRateRows}

        </thead>
    </table>
</div>:<span data-test="guess-instructions">try to guess the secreat word</span>
}        </div>
    )
}

GuessWords.propTypes ={
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired

}
export default GuessWords
