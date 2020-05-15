import React from 'react';
import styled from 'styled-components';

const BoxBorder = styled.div`
	border: 2px solid black;
	width: 250px;
	height: 35px;
	display: inline-block;
`;
const Box = styled.div`
	background-color: ${(props) => props.backgroundColor};
	width: ${(props) => (props.current / props.initial) * 250}px;
	height: 35px;
	transition: width 0.3s;
	display: inline-block;
	float: left;
`;

const P = styled.p`
	display: block;
	margin-top: 0px;
`;

class Bar extends React.Component {
	boxColors = {
		playerHealth: 'red',
		monsterHealth: '#8b0001',
		criticalHit: 'blue',
		time: 'blue',
	};
	text = {
		playerHealth: 'Health: ',
		monsterHealth: 'Health: ',
		criticalHit: 'Critical Hit Counter: ',
		time: '',
	};
	render() {
		return (
			<div>
				<BoxBorder>
					<Box
						backgroundColor={this.boxColors[this.props.type]}
						initial={this.props.initial}
						current={this.props.current}
					></Box>
				</BoxBorder>
				<P>{`${this.text[this.props.type]}${this.props.current}/${this.props.initial}`}</P>
			</div>
		);
	}
}

export default Bar;
