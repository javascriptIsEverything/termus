(() => {
    // initing stuff
    let style;
    require(`${gitURL}/css/css.js`)
    .then(resolve => style = eval(resolve));
    // window.closest = require(`${gitURL}/main/closest.js`);
    window.isTag = (obj, tagName) => obj.tagName.toLowerCase() == tagName;
    
    window.body = document.body;
    window.title = document.title;

    window.terminalContainer = document.createElement `div`;
    window.terminal = document.createElement `input`;
    window.datalist = document.createElement `datalist`;

    datalist.id = 'termus_commands';
    terminal.setAttribute('list', 'termus_commands');
    terminalContainer.appendChild(datalist);

    // window.commands = require(`${gitURL}main/commands.js`);
    // let changeDataList = () => {
    //     let prevCommands = terminal.value.trimLeft().split(/\s+/);

    //     let tmp = commands;
    //     for (let i in prevCommands) {
    //         if (prevCommands[i] == 'canExecute') return;
    //         if (tmp === null) return;
    //         if (tmp.hasOwnProperty(prevCommands[i]))
    //             tmp = tmp[prevCommands[i]];
    //         else break;
    //     }

    //     let fragment = document.createDocumentFragment();
    //     datalist.innerHTML = '';
        
    //     if (tmp !== null && !tmp.hasOwnProperty(prevCommands[prevCommands.length-1]) && prevCommands[0]) {
    //         prevCommands.pop();
    //     }
    //     let changeShadow = false;;
    //     for (let i in tmp) {
    //         if (i == 'canExecute') {
    //             terminal.style.boxShadow = '0 0 20px #0f0';
    //             changeShadow = true;
    //             continue;
    //         }
    //         let el = document.createElement `option`;
    //         el.appendChild(
    //             document.createTextNode(`${prevCommands.join(' ')} ${i}`)
    //         )
    //         if (!changeShadow) 
    //             terminal.style.boxShadow = '0 0 10px #000';
    //         fragment.appendChild(el);
    //     }
    //     datalist.appendChild(fragment)
    // }
    // terminal.addEventListener('input', () => {
    //     changeDataList()
    // })
    // terminal.addEventListener('focus', () => {
    //     changeDataList()
    // })

    window.findElement = e => document.elementFromPoint(e.pageX, e.pageY);
    window.isExecuting = false;

    window.eventPreventer = style.eventPreventer;

    // // terminal config
    terminalContainer.appendChild(style.default);
    body.appendChild(style.nodeEventPreventer);
    terminalContainer.id = 'terminalContainer_0xfff';
    terminal.addEventListener('blur', () => termus.exec(terminal.value));

    terminalContainer.appendChild(terminal);
    body.appendChild(terminalContainer);

    // // hide or show terminal
    // document.addEventListener('keydown', e => {
    //     if (e.keyCode != 20 || isExecuting) return;
    //     let bool = terminalContainer.style.display == 'none' ? 0 : 1;
    //     terminalContainer.style.display = bool ? 'none' : 'block';
    // });
})()