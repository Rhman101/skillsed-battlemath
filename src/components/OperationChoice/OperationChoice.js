import React from 'react';
import './OperationChoice.css';

function importAll(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
const images = importAll(require.context('./../../images', false, /(bg1.jpg|bg2.jpg|bg3.jpg|bg4.jpg)$/));

const OperationChoice = (props) => {
	return (
		<div className="operationChoiceMain">
			<h1 className="operationChoiceHeading">Choose your Battle!</h1>
			<div className="block additionBlock">
				<div className="selectionBox" onClick={() => props.toGamePage('addition')}>
					<img alt="forest background" className="backgroundImage" src={images['bg1.jpg']}></img>
					<p>{`Addition Challenge${props.completed.addition ? ' completed' : ''}`}</p>
				</div>
			</div>
			<div onClick={() => props.toGamePage('subtraction')} className="block subtractionBlock">
				<div className="selectionBox" onClick={() => props.toGamePage('addition')}>
					<img alt="forest background" className="backgroundImage" src={images['bg2.jpg']}></img>
					<p>{`Subtraction Challenge${props.completed.subtraction ? ' completed' : ''}`}</p>
				</div>
			</div>
			<div onClick={() => props.toGamePage('multiplication')} className="block multiplicationBlock">
				<div className="selectionBox" onClick={() => props.toGamePage('addition')}>
					<img alt="forest background" className="backgroundImage" src={images['bg3.jpg']}></img>
					<p>{`Multiplication Challenge${props.completed.multiplication ? ' completed' : ''}`}</p>
				</div>
			</div>
			<div onClick={() => props.toGamePage('division')} className="block divisionBlock">
				<div className="selectionBox" onClick={() => props.toGamePage('addition')}>
					<img alt="forest background" className="backgroundImage" src={images['bg4.jpg']}></img>
					<p>{`Division Challenge${props.completed.division ? ' completed' : ''}`}</p>
				</div>
			</div>
		</div>
	);
};
export default OperationChoice;
