module.exports = {
    node: {
        var: {
            canExecute: true,
            '[[variable name]]': null
        },
        clone: {
            canExecute: true,
            '--start': {
                canExecute: true
            },
            '--after': {
                canExecute: true
            },
            '--before': {
                canExecute: true
            },
            '--append': {
                canExecute: true
            },
            '--end': {
                canExecute: true
            },
        },
        keep: {
            three:{
                canExecute: true
            },
            parents: {
                canExecute: true
            },
        },
        unset: {
            css: {
                canExecute: true
            },
            '[[property name]]': null 
        },
        edit: {
            canExecute: true,
            on: {
                canExecute: true
            },
            off: {
                canExecute: true
            }
        },
        empty: {
            canExecute: true,
        },
        copy: {
            canExecute: true,
            '--html': {
                canExecute: true
            },
        },
        prevent: {
            canExecute: true,
            parent: {
                canExecute: true,
            }
        },
        remove: {
            canExecute: true,
            parent: {
                canExecute: true
            }
        },
        shuffle: {
            canExecute: true,
            parent: {
                canExecute: true
            }
        },
        dir: {
            '--ltr': {
                canExecute: true
            },
            '--rtl': {
                canExecute: true
            }
        }
    },
    link: {
        void: {
            canExecute: true
        },
        reset: {
            canExecute: true
        }
    },
    links: {
        void: null,
        reset: null
    },
    input: {
        '--pass': {
            canExecute: true
        },
        '--text': {
            canExecute: true
        }
    },
    page: {
        edit: {
            canExecute: true,
            on: {
                canExecute: true
            },
            off: {
                canExecute: true
            }
        },
        remove: {
            '[[node name]]': null
        },
    }
}