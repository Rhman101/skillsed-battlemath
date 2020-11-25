const imageSizeCss = (type, operation, level) => {
    if (type === 'monster') {
        if (operation === 'division') {
            if (level === 1) {
                return { width: '215px' }
            } else if (level === 2) {
                return { width: '330px' }
            } else {
                return { width: '330px'}
            }
        }
    }
    return {}
};

export default imageSizeCss;
