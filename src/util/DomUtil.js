const isElementInViewport = (el) => {

    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

const isElementThroughViewport = (el, percent) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * percent;
}

const isElementIntersectingWith = (firstElement, secondElement) => {
    const firstBBox = firstElement.getBoundingClientRect();
    const secondBBox = secondElement.getBoundingClientRect();
    const isIntersecting = (
        firstBBox.top >= secondBBox.top &&
        firstBBox.left >= secondBBox.left &&
        firstBBox.right <= secondBBox.right &&
        firstBBox.bottom <= secondBBox.bottom
    );
    return isIntersecting;
}

const isElementVerticallyIntersectingWith = (firstElement, secondElement) => {
    const firstBBox = firstElement.getBoundingClientRect();
    const secondBBox = secondElement.getBoundingClientRect();
    const isIntersecting = (
        firstBBox.top >= secondBBox.top &&
        firstBBox.bottom <= secondBBox.bottom
    );
    return isIntersecting;
}

const isElementHorizontallyIntersectingWith = (firstElement, secondElement) => {
    const firstBBox = firstElement.getBoundingClientRect();
    const secondBBox = secondElement.getBoundingClientRect();
    const isIntersecting = (
        firstBBox.left >= secondBBox.left &&
        firstBBox.right <= secondBBox.right
    );
    return isIntersecting;
}

const getMostPrevalentElement = (pages) => {
    let mostPrevalentElement = null;
    let smallestDimension = Infinity;
    pages.forEach((page) => {
        const absoluteY = Math.abs(page.getBoundingClientRect().y);
        if (absoluteY < smallestDimension) {
            smallestDimension = absoluteY;
            mostPrevalentElement = page;
        }
    });
    return mostPrevalentElement;
}

const rgb2hex = (rgb) => {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

export {
    isElementInViewport,
    isElementThroughViewport,
    isElementIntersectingWith,
    isElementVerticallyIntersectingWith,
    isElementHorizontallyIntersectingWith,
    getMostPrevalentElement,
    rgb2hex
}