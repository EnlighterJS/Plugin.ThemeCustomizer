export default {
    default: {
        selector: ".enlighter-t-${THEME_NAME}",
        attributes: [
            'fontFamily',
            'fontWeight',
            'fontStyle',
            'fontColor'
        ]
    },
    linenumbers: {
        selector: ".enlighter-t-${THEME_NAME}.enlighter-linenumbers div.enlighter>div::before",
        attributes: [
            'fontFamily',
            'fontWeight',
            'fontStyle',
            'fontColor'
        ]
    },
    buttons: {
        selector: ".enlighter-t-${THEME_NAME} .enlighter-btn",
        attributes: [
            'fontFamily',
            'fontWeight',
            'fontStyle',
            'fontColor'
        ]
    },
    codegroupbutton: {
        selector: ".enlighter-t-${THEME_NAME}.enlighter-v-codegroup .enlighter-codegroup-switch .enlighter-btn",
        attributes: [
            'fontFamily',
            'fontWeight',
            'fontStyle',
            'fontColor'
        ]
    }
}