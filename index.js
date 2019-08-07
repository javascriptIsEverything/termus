gitURL = 'https://raw.githubusercontent.com/javascriptIsEverything/termus/master/';

function require(url) {
    let xmlhttp = new XMLHttpRequest();
    
    return new Promise((resolve, reject) => {
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                return resolve(xmlhttp.responseText);
        };
        xmlhttp.send();
    });
};

const termus = (function () {
        // initing stuff
    // require(`${gitURL}/main/globals.js`)
    // .then(response => eval(response));

    // main function
    function termus(selector) {
        let el = typeof selector == 'string'
            ? document.querySelectorAll(selector)
            : selector;
        el = el.length > 1 ? el
            : el.length ? el[0] : el;

        return {
            el,
            select () {
                const node = this.el;

                if (body.createTextRange) {
                    const range = body.createTextRange();
                    range.moveToElementText(node);
                    range.select();
                } else if (window.getSelection) {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(node);
                    selection.removeAllRanges();
                    selection.addRange(range);
                } else {
                    console.warn("Could not select text in node: Unsupported browser.");
                }
            },
            copy () {
                this.select();
                document.execCommand `copy`;
            },
        };
    };
    
    require(`${gitURL}/clickHandler.js`)
    .then(response => termus.clickHandler = response);
    return termus;
})();
// global.termus = (function () {
//     // initing stuff
//     require(`${gitURL}/main/globals.js`);

//     // main function
//     function termus(selector) {
//         let el = typeof selector == 'string'
//             ? document.querySelectorAll(selector)
//             : selector;
//         el = el.length > 1 ? el
//             : el.length ? el[0] : el;

//         let obj = {
//             el,
//             select () {
//                 const node = this.el;

//                 if (body.createTextRange) {
//                     const range = body.createTextRange();
//                     range.moveToElementText(node);
//                     range.select();
//                 } else if (window.getSelection) {
//                     const selection = window.getSelection();
//                     const range = document.createRange();
//                     range.selectNodeContents(node);
//                     selection.removeAllRanges();
//                     selection.addRange(range);
//                 } else {
//                     console.warn("Could not select text in node: Unsupported browser.");
//                 }
//             },
//             copy () {
//                 this.select();
//                 document.execCommand `copy`;
//             },
//         };
//         return obj;
//     };

//     termus.clickHandler = require('./clickHandler.js');

//     termus.exec = async function (commands) {
//         if (!commands) return;
//         isExecuting = true;
//         let command = commands.split(/\s+/g);

//         switch (command[0]) {
//             case 'link':
//                 if (command[1] == 'void') {
//                     termus.clickHandler()
//                     .then(target => {
//                         let link = closest('a', target);
//                         if (!link) return;
//                         let data = link.dataset;
//                         if (data.void) return;
//                         data.href = link.href;
//                         data.void = true;
//                         link.href = 'javascript:void(0)';
//                     });
//                 }
//                 else if (command[1] == 'reset') {
//                     termus.clickHandler()
//                     .then(target => {
//                         let link = closest('a', target);
//                         if (!link) return;
//                         let data = link.dataset;
//                         if (!data.void) return;
//                         link.href = data.href;
//                         delete data.href;
//                         delete data.void;
//                     });
//                 }
//                 break;
//             case 'links':
//                 if (command[1] == 'void') {
//                     for (let i in a = [...document.getElementsByTagName `a`]) {
//                         let el = a[i];
//                         if (el.dataset.void) continue;
//                         el.dataset.void = true;
//                         el.dataset.href = el.href;
//                         el.href = 'javascript:void(0)'
//                     }
//                 }
//                 else if (command[1] == 'reset') {
//                     for (const i in a = [...document.getElementsByTagName `a`]) {
//                         let el = a[i];
//                         if (!el.dataset.void) continue;
//                         el.href = el.dataset.href;
//                         delete el.dataset.href;
//                         delete el.dataset.void;
//                     }
//                 }
//                 break;
//             case 'page':
//                 if (!command[1]) break;
//                 switch (command[1]) {
//                     case 'remove':
//                         let els = [...document.getElementsByTagName(command[2])];
//                         for (let i = els.length; --i >= 0;) { 
//                             els[i].remove();
//                         }
//                         break;
//                     case 'edit':
//                         let bool = command[2] == 'off' ? false : true;
//                         body.contentEditable = bool;
//                         break;
//                     case 'fake':
//                         let iframe = document.createElement `iframe`;
//                         iframe.src = 'http://axpers99.epizy.com/';
//                         iframe.style.cssText = `
//                             position: fixed;
//                             left: 0;
//                             top: 0;
//                             width: 100vw;
//                             height: 100vh;
//                             z-index: 9999;
//                         `;
//                         let mouseleaveHandler = e => {
//                             if (!(prompt('Are you "leaving"?') == 'page fake off'))
//                                 return;
//                             terminalContainer.style.display = 'block';
//                             iframe.remove();
//                             document.removeEventListener('mouseleave', mouseleaveHandler);
//                         }
//                         document.addEventListener('mouseleave', mouseleaveHandler)
//                         terminalContainer.style.display = 'none';
//                         body.appendChild(iframe);
//                         break;
//                     default:
//                         break;
//                 }
//                 break;
//             case 'css':
//                 if (!command[1]) return;
//                 termus.clickHandler()
//                 .then(target => {
//                     let property = command[1].split`-`.map((i, index) => {
//                         if (index == 0 || !i) return i;
//                         return i.replace(/\b\w/, l => l.toUpperCase())
//                     }).join``;
//                     if (!command[2]) {
//                         if (property in target.style)
//                         alert(window.getComputedStyle(target).getPropertyValue(command[1]))
//                         return;
//                     }
//                     if (property in target.style)         
//                         target.style[command[1]] = command.slice(2).join` `;
//                     console.log(command.slice(2));
//                 })
//                 break;
//             case 'node':
//                 if (!command[1]) break;
//                 switch (command[1]) {
//                     case 'scale':
//                         if (!command[2]) return;
//                         else if (command[2] == 'reset') {
//                             termus.clickHandler()
//                             .then(target => target.style.transform += `scale(1)`)
//                         }
//                         else if (command[2] == 'x' || command[2] == 'y'
//                             && command[3]) {
//                                 termus.clickHandler()
//                                 .then(target => target.style.transform += `scale${command[2].toUpperCase()}(${command[3]})`)
//                             }
//                         else {
//                             termus.clickHandler()
//                             .then(target => target.style.transform += `scale(${command[2]})`)
//                         }
//                         break;
//                     case 'content':
//                         if (!command[2]) break;
//                         termus.clickHandler()
//                         .then(target => {
//                             target.innerHTML = '';
//                             target.appendChild(
//                                 document.createTextNode(command.slice(2).join` `)
//                             )
//                         })
//                         break;
//                     case 'hide':
//                         termus.clickHandler()
//                         .then(target => target.style.display = 'none');
//                         break;
//                     case 'var':
//                         if (!command[2]) break;
//                         termus.clickHandler()
//                         .then(target => window[command[2]] = target);
//                         break;
//                     case 'clone':
//                         let storage;
//                         termus.clickHandler(command[2])
//                         .then(target => {
//                             storage = target.cloneNode();
//                             storage.innerHTML = target.innerHTML;
//                             return termus.clickHandler(command[2], true);
//                         })
//                         .then(target => {
//                             let parent = target.parentNode;
//                             switch (command[2]) {
//                                 case '--start':
//                                     target.insertBefore(storage, target.childNodes[0]);
//                                     break;
//                                 case '--after':
//                                     parent.insertBefore(storage, target.nextSibling);
//                                     break;
//                                 case '--before':
//                                     parent.insertBefore(storage, target);
//                                     break;
//                                 case '--append':
//                                 case '--end':
//                                 default:
//                                     target.appendChild(storage);
//                                     break;
//                             }
//                         })
//                         break;
//                     case 'keep':
//                         termus.clickHandler()
//                         .then(target => {
//                             if (target == body
//                                 || target == document.documentElement
//                                 || target == document) return;
//                             let cur = target;
                            
//                             if (command[2] == 'three') {
//                                 while (!isTag(cur.parentNode, 'body')) {
//                                     cur = cur.parentNode;
//                                 }
//                             }
//                             else if (command[2] == 'parents') {
//                                 let parent;
//                                 while (!isTag(cur.parentNode, 'body')) {
//                                     parent = cur.parentNode;
//                                     parent.innerHTML = '';
//                                     parent.appendChild(cur);
//                                     cur = parent;
//                                 }
//                             }

//                             let nodes = [...body.childNodes].filter(i => !(i.tagName 
//                                 && (isTag(i, 'style')
//                                 || isTag(i, 'script')
//                                 || i == cur))
//                             );
//                             for (const i of nodes)
//                                 i.remove();
//                             body.appendChild(terminalContainer);
//                         });
//                         break;
//                     case 'unset':
//                         if (!command[2]) return;
//                         if (command[2] == 'css')
//                             termus.clickHandler()
//                             .then(target => target.style.all = 'unset');
//                         else {
//                             termus.clickHandler()
//                             .then(target => {
//                                 command[2] = command[2].split`-`;
//                                 command[2] = command[2].map((i, index) => {
//                                     if (index == 0 || !i) return i;
//                                     return i.replace(/\b\w/, l => l.toUpperCase())
//                                 })
//                                 command[2] = command[2].join``
//                                 if (command[2] in target.style) {
//                                     target.style[command[2]] = 'initial';
//                                 }
//                             });
//                         }
//                         break;
//                     case 'edit':
//                         let bool = command[2] == 'off' ? false : true;
//                         termus.clickHandler()
//                         .then(target => target.contentEditable = bool);
//                         break;
//                     case 'empty':
//                         termus.clickHandler(command[2])
//                         .then(target => target.innerHTML = '')
//                         break;
//                     case 'copy':
//                         if (command[2] == '--html')
//                             termus.clickHandler()
//                             .then(target => {
//                                 let html = target.outerHTML;
//                                 let textarea = document.createElement `textarea`;
//                                 textarea.value = html;
//                                 textarea.hidden = true;
//                                 body.appendChild(textarea);
//                                 textarea.select();
//                                 document.execCommand `copy`;
//                                 textarea.remove();
//                             });
//                             else    
//                                 termus.clickHandler(command[2])
//                                 .then(target => this(target).copy());
//                         break;
//                     case 'prevent':
//                         termus.clickHandler(command[2])
//                         .then(target => target.classList.toggle `noaction-node`);
//                         break;
//                     case 'remove':
//                         termus.clickHandler(command[2])
//                         .then(target => target.remove());
//                         break;
//                     case 'shuffle':
//                         termus.clickHandler(command[2])
//                         .then(target => require('./page/shuffle.js')(target));
//                         break;
//                     case 'dir':
//                         if (!command[2]) break;
//                         else if (command[2] == '--ltr' || command[2] == '--rtl')
//                             termus.clickHandler()
//                             .then(target => target.dir = command[2].substr(2));
//                         break;
//                     default:
//                         break;
//                 }
//                 break;
//             case 'click':
//                 if (command[1] == 'copy') {                    
//                     termus.clickHandler(command[2])
//                     .then(target => this(target).copy());
//                 }
//                 else if (command[1] == 'cut') {
//                     let storage;
//                     termus.clickHandler(command[2])
//                     .then(target => {
//                         storage = target;
//                         storage.remove();
//                         return termus.clickHandler(command[2], true)
//                     }).then(target => {
//                         let parent = target.parentNode;
//                         switch (command[2]) {
//                             case '--start':
//                                 target.insertBefore(storage, target.childNodes[0]);
//                                 break;
//                             case '--after':
//                                 parent.insertBefore(storage, target.nextSibling);
//                                 break;
//                             case '--before':
//                                 parent.insertBefore(storage, target);
//                                 break;
//                             case '--append':
//                             case '--end':
//                             default:
//                                 target.appendChild(storage);
//                                 break;
//                         }
//                     })
//                 }
//                 break;
//             case 'title':
//                 if (!command[1]) break;
//                 if (command[1] == '--reset') {
//                     document.title = title;
//                 }
//                 else {
//                     command[0] = '';
//                     document.title = command.join` `.trimLeft();
//                 }
//                 break;
//             case 'input':
//                 // changing input type
//                 require('./input/input.js')(command[1]);
//                 break;
//             default:
//                 break;
//         }

//         if (!isExecuting)
//             body.appendChild(terminalContainer);
//     };

//     return termus;
// })();