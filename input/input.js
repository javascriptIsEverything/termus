module.exports = function (type) {
    if (!type) return;
    if (type == '--text')
        type = 'text';
    else if (type == '--pass')
        type = 'password';
    else return;

    termus.clickHandler()
    .then(target => {
        let input = closest('input', target);
        if (input && input != terminal) {
            input.focus();
            input.type = type;
        }
    })
}