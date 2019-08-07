(tagName, target) => {
    let el = target;
    if (target.nodeName != tagName) {
        el = target.querySelector(tagName)
            || target.closest(tagName)
            || document.querySelector(tagName);
    }
    return el;
}