(() => {
    const styleCreator = style =>
    document.createElement `style`.appendChild(
        document.createTextNode(style)
    ).parentNode;
    return {
        default: styleCreator`
            #terminalContainer_0xfff {
                all: unset;
                width: 60vh;
                padding: 10px;
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 10000;
            }
            #terminalContainer_0xfff input {
                all: unset;
                width: 60vh;
                padding: 20px;
                font-size: 25px;
                color: #fff;
                border: 1px solid #000;
                box-shadow: 0 0 10px #000;
                background: rgba(0, 0, 0, .9);
            }
        `,
        eventPreventer: styleCreator`
        *, *::before, *::after {
            pointer-events: none;
        }`,
        nodeEventPreventer: styleCreator`
        noaction-node, noaction-node::before, noaction-node::after,
        noaction-node > *, noaction-node > *::before, noaction-node > *::after {
            pointer-events: none;
        }`
    }
})();