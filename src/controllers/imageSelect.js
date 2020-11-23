const imageSelect = (type, operation, level) => {
	const operationSelect = {
		addition: '1',
		subtraction: '2',
		multiplication: '3',
		division: '4',
	};
	if (type === 'player') {
		return 'char1.png';
	} else if (type === 'monster') {
		return `m${operationSelect[operation]}${level}.png`;
	} else if (type === 'background') {
		return `bg${operationSelect[operation]}.jpg`
	} else {
		console.log('IMAGE ERROR!');
		return undefined;
	}
};

export default imageSelect;
