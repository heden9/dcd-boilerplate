module.exports = {
    directories: {
        scripts: "",
        pages: "src",
    },
    scripts: {
        vendors: [
            "babel-polyfill",
            "react",
            "react-dom"
        ],
        index: "src/index.js",
    },
    pages: {
        "index.html": {
            scripts: {
                body: [ "vendors", "index" ]
            }
        },
    }
}
