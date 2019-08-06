module.exports = () => {
    let nodes = [...document.body.querySelectorAll`*`].filter(i => {
        return !isTag(i, 'script')
            && !isTag(i, 'style')
            && !isTag(i, 'svg')
            && !isTag(i, 'input')
            && !isTag(i, 'textarea')
            && !isTag(i, 'link')
            && !isTag(i, 'path')
            && !isTag(i, 'iframe')
    })
    function shuffle (node) {

        let array = [...node.childNodes],
            len = array.length,
            fragment = document.createDocumentFragment(),
            temp, index;

        while (len > 0) {
            index = ~~(Math.random() * len)
            len--
            temp = array[len]
            array[len] = array[index]
            array[index] = temp
        }

        for (let i = array.length-1; i > 0; i--)
            fragment.appendChild(array[i])

        node.appendChild(fragment)
    }
    for (let i in nodes)
        shuffle(nodes[i])
}