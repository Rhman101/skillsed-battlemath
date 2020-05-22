
const difficultyFunction = (operation, level) => {
    const data = {
        addition: [
            [40, 10, 20],
            [60, 9, 20],
            [80, 8, 16]
        ],
        subtraction: [
            [40, 12, 20],
            [60, 11, 20],
            [80, 10, 16]
        ],
        multiplication: [
            [60, 10, 30],
            [80, 9, 28],
            [100, 8, 20]
        ],
        division: [
            [40, 14, 20],
            [50, 13, 20],
            [60, 12, 12]
        ]
    };
    return {
        questions: data[operation][level - 1][0],
        // questions: 3, // For testing
        seconds: data[operation][level - 1][1],
        percentageToFail: data[operation][level - 1][2],
        // percentageToFail: 3 // for testing
    }
}

export default difficultyFunction;