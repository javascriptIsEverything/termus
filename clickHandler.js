(targetElement = '', isDone = true) => {
    // preventing alter events
    body.appendChild(eventPreventer);
    terminalContainer.remove();
    
    return new Promise((resolve, reject) => {
        document.addEventListener('click', e => {
            e.preventDefault();
            eventPreventer.remove();

            let target = findElement(e);
            if (targetElement == 'parent')
                target = target.parentNode || target;
            if (!isDone)
                return void body.appendChild(eventPreventer);
            body.appendChild(terminalContainer);
            isExecuting = false;
            return resolve(target)
        }, {once: true});
    });
};