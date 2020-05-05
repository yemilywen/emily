const routeToNewTabHashed = (url) => {
    const hashedRoute = process.env.PUBLIC_URL + '/#';
    return window.open(hashedRoute + url);
}

const routeToNewTab = (url) => {
    return window.open(url);
}

export {
    routeToNewTabHashed,
    routeToNewTab
}