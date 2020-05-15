import React from 'react';
import './LevelStartPage.css';

const LevelStartPage = (props) => {
	return (
		<div className='levelStartMain'>
			<p className='wellDoneText'>Well done for completing this level, but the fight is not over!</p>
			<button className='continueButton' onClick={props.continue}>Continue</button>
		</div>
	);
};

export default LevelStartPage;
