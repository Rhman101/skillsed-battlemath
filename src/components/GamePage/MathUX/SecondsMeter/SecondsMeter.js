import React from 'react';
import Bar from '../Bar/Bar';

const SecondsMeter = (props) => {
	return (
		<div>
			<Bar initial={props.secondsInitial} current={props.secondsLeft} type='time'></Bar>
		</div>
	);
};

export default SecondsMeter;
