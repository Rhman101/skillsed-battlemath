const additionFunction = () => {
	let x = Math.floor(Math.random() * 10) + 2;
	let y = Math.floor(Math.random() * 10) + 2;
	return {
		valueOne: x,
		valueTwo: y,
		answer: x + y,
		questionText: `${x} + ${y} = `
	};
};

const subtractionFunction = () => {
	let x = Math.floor(Math.random() * 11) + 8;
	let y = Math.floor(Math.random() * 11) + 1;
	return {
		valueOne: x + y,
		valueTwo: y,
		answer: x,
		questionText: `${x + y} - ${y} = `
	};
};

const multiplicationFunction = () => {
	let x = Math.floor(Math.random() * 11) + 1;
	let y = Math.floor(Math.random() * 11) + 1;
	return {
		valueOne: x,
		valueTwo: y,
		answer: x * y,
		questionText: `${x} x ${y} = `
	};
};

const divisionFunction = () => {
    let x = Math.floor(Math.random() * 11) + 1;
    let y = Math.floor(Math.random() * 11) + 1;
    return {
        valueOne: x,
        valueTwo: y,
        answer: x,
        questionText: `${x * y} / ${y} = `
    }
}

const arithmeticFunction = (operation) => {
	switch (operation) {
		case 'addition':
			return additionFunction();
		case 'subtraction':
			return subtractionFunction();
		case 'multiplication':
			return multiplicationFunction();
		case 'division':
            return divisionFunction();
        default: 
        console.log('Clearly a problem');
        return 'clearly a problem'
	}
};

export default arithmeticFunction;
