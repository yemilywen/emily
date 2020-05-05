/**
 * Performs a typing animation for a given word on a target element
 * @param {String} word             The word to animate
 * @param {Element} targetElement   The element to render the word
 */
const typeAnimation = (word, targetElement, typeAnimateSpeed) => {
    const letterArray = word.split('');
    if (letterArray.length > 0) {
        targetElement.innerHTML += letterArray.shift();

        setTimeout(() => {
            processTypeAnimation(letterArray, targetElement, typeAnimateSpeed);
        }, typeAnimateSpeed);
    }
}

const processTypeAnimation = (letterArray, targetElement, typeAnimateSpeed) => {
    if (letterArray.length > 0) {
        targetElement.innerHTML += letterArray.shift();

        setTimeout(() => {
            processTypeAnimation(letterArray, targetElement, typeAnimateSpeed);
        }, typeAnimateSpeed);
    }
}

export default typeAnimation;