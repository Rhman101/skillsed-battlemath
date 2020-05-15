import React from 'react';
import IntroPage from './components/IntroPage/IntroPage';
import OperationChoice from './components/OperationChoice/OperationChoice';
import GamePage from './components/GamePage/GamePage';
import GameCompletePage from './components/GameCompletePage/GameCompletePage';
import './App.css';

class App extends React.Component {
	state = {
		activePage: {
			IntroPage: true,
			OperationChoice: false,
			GamePage: false,
			GameCompletePage: false,
		},
		operationsComplete: {},
		currentOperation: '',
	};
	toOperationChoice = () => {
		this.setState(() => ({
			activePage: {
				IntroPage: false,
				OperationChoice: true,
			},
		}));
	};
	toGamePage = (operation) => {
		this.setState(() => ({
			activePage: {
				OperationChoice: false,
				GamePage: true,
			},
			currentOperation: operation,
		}));
	};
	CompleteToHomePage = () => {
		this.setState((prevState) => {
			if (
				// if game complete
				Object.keys(prevState.operationsComplete).length === 3 &&
				Object.keys(prevState.operationsComplete).findIndex((elem) => elem === prevState.currentOperation) ===
					-1
			) {
				return {
					activePage: {
						IntroPage: false,
						OperationChoice: false,
						GamePage: false,
						GameCompletePage: true,
					},
					operationsComplete: { addition: true, subtraction: true, multiplication: true, division: true },
					currentOperation: '',
				};
			} else {
				return {
					activePage: {
						IntroPage: false,
						OperationChoice: true,
						GamePage: false,
					},
					operationsComplete: {
						...prevState.operationsComplete,
						[prevState.currentOperation]: true,
					},
					currentOperation: '',
				};
			}
		});
	};
	toOperationChoicePage = () => {
		this.setState(() => ({
			activePage: {
				IntroPage: false,
				OperationChoice: true,
				GamePage: false,
				GameCompletePage: false,
			},
		}))
	}
	render() {
		return (
			<div>
				{this.state.activePage.IntroPage && <IntroPage toOperationChoice={this.toOperationChoice} />}
				{this.state.activePage.OperationChoice && (
					<OperationChoice toGamePage={this.toGamePage} completed={this.state.operationsComplete} />
				)}
				{this.state.activePage.GamePage && (
					<GamePage 
						operation={this.state.currentOperation} 
						CompleteToHomePage={this.CompleteToHomePage}
						toOperationChoicePage={this.toOperationChoicePage}
					/>
				)}
				{this.state.activePage.GameCompletePage && <GameCompletePage />}
			</div>
		);
	}
}

export default App;
