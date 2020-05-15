import React from 'react';
import './LosePage.css';

const LosePage = (props) => {
	return (
		<div className="losePageMain">
			<button className="losePageButton tryAgainButton" onClick={props.tryAgain}>
				Try again!
			</button>
			<br></br>
			<button className="losePageButton tryAnotherButton" onClick={props.tryAnother}>
				Try another challenge!
			</button>
		</div>
	);
};

export default LosePage;
