function animationForElements(blockForAnimation, animationClass) {
    const currentBlock = document.querySelectorAll(blockForAnimation);

    window.addEventListener('scroll', () => {
        currentBlock.forEach(block => {
            visible(block);
        });
    });

    function visible(target) {

        const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        };
    
        const windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
    
        if (targetPosition.bottom > windowPosition.top && 
        (targetPosition.top + 200) < windowPosition.bottom) { 
            target.classList.add(animationClass);
        } 
    };

    currentBlock.forEach(block => {
        visible(block);
    });
}

export default animationForElements;