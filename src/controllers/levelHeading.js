const levelHeading = (operation, level) => {
    const levels = ['Easy', 'Medium', 'Final Hard'];
    let operationName = operation.split('');
    operationName[0] = operationName[0].toUpperCase();
    operationName = operationName.join('');
    // return `${levels[level - 1]} ${operationName} Challenge${level === 3 ? '!' : ''}`
    return `Level ${level}`
}

export default levelHeading