function getAndReplaceCurrentYear(selector) {
    const element = document.querySelector(selector);
    const date = new Date();

    if(element) {
        element.innerText = date.getFullYear();
    }
}

export { getAndReplaceCurrentYear };
