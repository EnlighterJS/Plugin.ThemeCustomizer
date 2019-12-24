export default {
    fontFamily: {
        description: "select the font family",
        label: "font family",
        type: "select",
        options: [
            {
                label: "Source Code Pro",
                value: '"Source Code Pro", "Liberation Mono", "Courier New", Courier, monospace'
            },
            {
                label: "Consolas",
                value: '"Consolas", "Source Code Pro", "Liberation Mono", "Courier New", Courier, monospace'
            },
            {
                label: "Inconsolata",
                value: '"Inconsolata", "Consolas", "Source Code Pro", "Liberation Mono", "Courier New", Courier, monospace'
            },
            {
                label: "Open Sans",
                value: '"Open Sans", Arial, Verdana, sans-serif'
            }
        ],
        render: (value) => {
            return "font-family: " + value + ";";
        }
    },
    fontColor: {
        description: "select the font color",
        label: "color",
        type: "color",
        render: (value) => {
            return "color: " + value + ";";
        }
    },
    fontWeight: {
        description: "select the font weight",
        label: "weight",
        type: "select",
        options: [
            { label: "normal", value: "normal" },
            { label: "bold", value: "bold" },
            { label: "bolder", value: "bolder" },
            { label: "lighter", value: "lighter" },
            { label: "100", value: 100 },
            { label: "200", value: 200 },
            { label: "300", value: 300 },
            { label: "400", value: 400 },
            { label: "500", value: 500 },
            { label: "600", value: 600 },
            { label: "700", value: 700 },
            { label: "800", value: 800 },
            { label: "900", value: 900 }
        ],
        render: (value) => {
            if (typeof value === 'string'){
                return "font-weight: \"" + value + "\";";
            }else{
                return "font-weight: " + value + ";";
            }
        }
    },
    fontStyle: {
        description: "select the font style",
        label: "style",
        type: "select",
        options: [
            { label: "normal", value: "normal" },
            { label: "italic", value: "italic" },
            { label: "overline", value: "overline" },
            { label: "underline", value: "underline" }
        ]
    }
}