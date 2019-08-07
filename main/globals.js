(async () => {
    // initing stuff
    let global = {};
    let style;
    require(`${gitURL}/css/css.js`).then(response => style = response);
    // global.closest;
    console.log(1);
    console.log(require(`${gitURL}/css/css.js`));
    require(`${gitURL}/main/closest.js`).then(response => global.closest = response);
    global.isTag = (obj, tagName) => obj.tagName.toLowerCase() == tagName;
    
    global.body = document.body;
    global.title = document.title;

    global.terminalContainer = document.createElement `div`;
    global.terminal = document.createElement `input`;
    global.datalist = document.createElement `datalist`;

    global.datalist.id = 'termus_commands';
    global.terminal.setAttribute('list', 'termus_commands');
    global.terminalContainer.appendChild(global.datalist);

    // global.commands = require(`${gitURL}/main/commands.js`);
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

    global.findElement = e => document.elementFromPoint(e.pageX, e.pageY);
    global.isExecuting = false;

    global.eventPreventer = style.eventPreventer;

    // // terminal config
    global.terminalContainer.appendChild(style.default);
    global.body.appendChild(style.nodeEventPreventer);
    global.terminalContainer.id = 'terminalContainer_0xfff';
    global.terminal.addEventListener('blur', () => termus.exec(global.terminal.value));

    global.terminalContainer.appendChild(global.terminal);
    global.body.appendChild(global.terminalContainer);

    // // hide or show terminal
    // document.addEventListener('keydown', e => {
    //     if (e.keyCode != 20 || isExecuting) return;
    //     let bool = terminalContainer.style.display == 'none' ? 0 : 1;
    //     terminalContainer.style.display = bool ? 'none' : 'block';
    // });
    return global;
})()