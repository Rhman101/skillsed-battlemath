const additionFunction = () => {
	const firstNumberArray = [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19];
	const SecondNumberArray = [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12];
	let x = firstNumberArray[Math.floor(Math.random() * firstNumberArray.length)];
	let y = SecondNumberArray[Math.floor(Math.random() * SecondNumberArray.length)];
	return {
		valueOne: x,
		valueTwo: y,
		answer: x + y,
		questionText: `${x} + ${y} = `
	};
};

const subtractionFunction = () => {
	const firstNumberArray = [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19];
	const SecondNumberArray = [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12];
	let x = firstNumberArray[Math.floor(Math.random() * firstNumberArray.length)];
	let y = SecondNumberArray[Math.floor(Math.random() * SecondNumberArray.length)];
	return {
		valueOne: x + y,
		valueTwo: y,
		answer: x,
		questionText: `${x + y} - ${y} = `
	};
};

const multiplicationFunction = () => {
	const numberArray = [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12];
	let x = numberArray[Math.floor(Math.random() * numberArray.length)];
	let y = numberArray[Math.floor(Math.random() * numberArray.length)];
	return {
		valueOne: x,
		valueTwo: y,
		answer: x * y,
		questionText: `${x} x ${y} = `
	};
};

const divisionFunction = () => {
    const numberArray = [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 11, 11, 11, 11, 12, 12, 12, 12];
	let x = numberArray[Math.floor(Math.random() * numberArray.length)];
	let y = numberArray[Math.floor(Math.random() * numberArray.length)];
    return {
        valueOne: x,
        valueTwo: y,
        answer: x,
        questionText: `${x * y} ÷ ${y} = `
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
