module.exports = {
    directories: {
        scripts: "",
        pages: "src/entries",
    },
    scripts: {
        vendors: [
            "babel-polyfill",
            "react",
            "react-dom"
        ],
        app: "src/entries/app/index.js",
        bpp: "src/entries/bpp/index.js",
    },
    pages: {
        "app/index.html": {
            scripts: {
                body: [ "vendors", "app" ]
            }
        },
        "bpp/index.html": {
            scripts: {
                body: [ "vendors", "bpp" ]
            }
        },
    }
}
