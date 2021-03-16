import React from 'react'
import PropTypes from 'prop-types';
function Congats(props) {
    return (
        <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
{props.success?'Congratulations! You Gussed the Word!.':''}</span>
            
        </div>
    )
};
Congats.propTypes ={
    success:PropTypes.bool.isRequired
}
export default Congats;
