import React from 'react';
import './OperationCompletePage.css';

const OperationCompletePage = (props) => {
	return (
		<div className='operationCompleteMain'>
			<h1 className='operationCompleteHeading'>Level 3 Complete!</h1>
            <p className='operationCompleteText'>{`Well done! You have completed the MathBattle ${props.operation} challenge!`}</p>
            <button className='operationCompletebutton' onClick={props.continue}>Continue</button>
		</div>
	);
};

export default OperationCompletePage;
