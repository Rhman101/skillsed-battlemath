import React from 'react';
import MathUX from './MathUX/MathUX.js';
import LevelStartPage from './LevelStartPage/LevelStartPage';
import OperationCompletePage from './OperationCompletePage/OperationCompletePage';
import LosePage from './LosePage/LosePage';

class GamePage extends React.Component {
	state = {
		operation: this.props.operation,
		level: 1,
		tryAgainPage: false,
		levelStartPage: false,
		losePage: false,
		operationComplete: false,
	};
	operationComplete = () => {
		this.setState(() => ({
			operationComplete: true,
		}));
	};
	backToAppPage = () => {
		this.props.CompleteToHomePage();
	};
	levelComplete = () => {
		if (this.state.level === 3) {
			this.operationComplete();
		}
		this.setState((prevState) => ({
			level: prevState.level + 1,
			levelStartPage: true,
		}));
	};
	endLevelStartPage = () => {
		this.setState(() => ({
			levelStartPage: false,
		}));
	};
	toOperationChoicePage = () => {
		this.props.toOperationChoicePage();
	};
	toLosePage = () => {
		this.setState(() => ({
			tryAgainPage: false,
			levelStartPage: false,
			operationComplete: false,
			losePage: true
		}));
	};
	tryAgain = () => {
		this.setState(() => ({
			losePage: false,
			level: 1
		}))
	}
	render() {
		return (
			<div>
				{!this.state.operationComplete ? (
					<div>
						{this.state.levelStartPage ? (
							<LevelStartPage continue={this.endLevelStartPage} />
						) : (!this.state.losePage ? (
							<MathUX
								operation={this.state.operation}
								level={this.state.level}
								levelComplete={this.levelComplete}
								toOperationChoicePage={this.props.toOperationChoicePage}
								toLosePage={this.toLosePage}
							/>
						) : <LosePage tryAgain={this.tryAgain} tryAnother={this.toOperationChoicePage}></LosePage>)}
					</div>
				) : (
					<OperationCompletePage operation={this.state.operation} continue={this.backToAppPage} />
				)}
			</div>
		);
	}
}
export default GamePage;
