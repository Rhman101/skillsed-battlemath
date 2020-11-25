import React from 'react';
import difficultyFunction from '../../../controllers/difficulty';
import arithmeticFunction from '../../../controllers/arithmetic';
import levelHeading from '../../../controllers/levelHeading';
import Bar from './Bar/Bar';
import SecondsMeter from './SecondsMeter/SecondsMeter';
import imageSelect from '../../../controllers/imageSelect';
import imageSizeCSS from '../../../controllers/imageSizing';
import './MathUX.css';

function importAll(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
const images = importAll(require.context('../../../images', false, /\.(png|jpe?g|svg)$/));

class MathUX extends React.Component {
	state = {
		monsterHealthInitial: difficultyFunction(this.props.operation, this.props.level).questions,
		monsterHealth: difficultyFunction(this.props.operation, this.props.level).questions,
		secondsLeft: difficultyFunction(this.props.operation, this.props.level).seconds,
		secondsInitial: difficultyFunction(this.props.operation, this.props.level).seconds,
		playerHealthInitial: difficultyFunction(this.props.operation, this.props.level).percentageToFail,
		playerHealth: difficultyFunction(this.props.operation, this.props.level).percentageToFail,
		currentQuestion: arithmeticFunction(this.props.operation),
		firstAttempt: true,
		input: '',
		criticalCount: 0,
		started: false,
		intervalID: '',
	};
	editAnswer = (e) => {
		e.preventDefault();
		e.persist();
		if (!isNaN(e.target.value)) {
			this.setState(() => ({ input: e.target.value }));
		}
	};
	answerCorrect = () => {
		if (this.state.firstAttempt && this.state.monsterHealth === 1) {
			this.props.levelComplete();
		}
		this.setState((prevState) => ({
			monsterHealth: prevState.firstAttempt
				? prevState.criticalCount > 8
					? prevState.monsterHealth - 2
					: prevState.monsterHealth - 1
				: prevState.monsterHealth,
			input: '',
			currentQuestion: arithmeticFunction(this.props.operation),
			firstAttempt: true,
			criticalCount: prevState.firstAttempt
				? prevState.criticalCount < 10
					? prevState.criticalCount + 1
					: 10
				: 0,
			secondsLeft: difficultyFunction(this.props.operation, this.props.level).seconds,
		}));
		this.healthTimerController(true);
	};
	answerIncorrect = () => {
		if (this.state.firstAttempt && this.state.playerHealth === 1) {
			this.props.toLosePage();
		} else {
			this.setState((prevState) => ({
				input: '',
				playerHealth: prevState.firstAttempt ? prevState.playerHealth - 1 : prevState.playerHealth,
				tryAgainQuestion: prevState.playerHealth === 0 ? true : false,
				firstAttempt: prevState.firstAttempt && false,
				criticalCount: 0,
			}));
		}
	};
	submitAnswer = () => {
		if (Number(this.state.input) === this.state.currentQuestion.answer) {
			this.answerCorrect();
		} else {
			this.answerIncorrect();
		}
		!this.state.started && this.setState(() => ({ started: true }));
	};
	pressedEnter = (e) => {
		if (e.key === 'Enter') {
			this.submitAnswer();
		}
	};
	healthTimerController = (complete = false) => {
		if (complete) {
			clearInterval(this.state.intervalID);
		}
		let intervalID = setInterval(() => {
			this.setState((prevState) => {
				if (prevState.secondsLeft === 1) {
					clearInterval(this.state.intervalID);
					return {
						playerHealth: prevState.firstAttempt ? prevState.playerHealth - 1 : prevState.playerHealth,
						tryAgainQuestion: prevState.playerHealth === 0 ? true : false,
						firstAttempt: prevState.firstAttempt && false,
						criticalCount: 0,
						secondsLeft: prevState.secondsLeft - 1,
					};
				} else {
					return {
						secondsLeft: prevState.secondsLeft - 1,
					};
				}
			});
		}, 1000);
		this.setState(() => ({
			intervalID,
		}));
	};
	componentWillUnmount() {
		clearInterval(this.state.intervalID);
	}
	render() {
		return (
			<div
				className="MathUXGridContainer"
				style={{
					backgroundImage: `url(${images[imageSelect('background', this.props.operation)]})`,
					backgroundSize: '1200px 560px',
				}}
			>
				<button id="backButton" onClick={this.props.toOperationChoicePage}>
					Back
				</button>
				<div className="headerArea">
					<h2>{levelHeading(this.props.operation, this.props.level)}</h2>
				</div>
				<div className="playerPicArea">
					<img
						alt="character"
						className="charImg"
						src={images[imageSelect('player', this.props.operation, this.props.level)]}
					></img>
				</div>
				<div className="monsterPicArea">
					<img
						style={imageSizeCSS('monster', this.props.operation, this.props.level)}
						alt="monster"
						className="monsterImg"
						src={images[imageSelect('monster', this.props.operation, this.props.level)]}
					></img>
				</div>
				<div className="mathQuestionArea">
					<p className="questionText">{this.state.currentQuestion.questionText}</p>
					<input
						className="answerInput"
						type="text"
						onChange={this.editAnswer}
						value={this.state.input}
						onKeyPress={this.pressedEnter}
					></input>
					{/* <button type="button" className="submitButton" onClick={this.submitAnswer}>Go!</button> */}
					<p>Hint: Press enter to submit!</p>
					<SecondsMeter
						secondsInitial={this.state.secondsInitial}
						secondsLeft={this.state.secondsLeft}
					></SecondsMeter>
				</div>
				<div className="playerHealthArea">
					<Bar
						type="playerHealth"
						initial={this.state.playerHealthInitial}
						current={this.state.playerHealth}
					></Bar>
				</div>
				<div className="criticalHitArea">
					<Bar type="criticalHit" initial={10} current={this.state.criticalCount}></Bar>
				</div>
				<div className="monsterHealthArea">
					<Bar
						type="monsterHealth"
						initial={this.state.monsterHealthInitial}
						current={this.state.monsterHealth}
					></Bar>
				</div>
			</div>
		);
	}
}

export default MathUX;
