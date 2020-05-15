import React from 'react';
import './IntroPage.css';

function importAll(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
const images = importAll(require.context('./../../images', false, /(m11.png|m43.png)$/));

const IntroPage = (props) => {
	return (
		<div className="introPageMain">
			<div className="imageLeft">
				<img alt="character" className="fireMonster" src={images['m43.png']}></img>
			</div>
			<div className="titleArea">
				<div className="border">
					<h3 className="introToTitle">Welcome to</h3>
					<h1 className="title">BattleMath!</h1>
					<button className="startButton" onClick={props.toOperationChoice}>
						Start
					</button>
				</div>
			</div>
			<div className="imageRight">
				<img alt="character" className="mushroom" src={images['m11.png']}></img>
			</div>
		</div>
	);
};

export default IntroPage;
