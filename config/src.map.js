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
        bar: "src/entries/bar/index.js",
        foo: "src/entries/foo/index.js",
    },
    pages: {
        "bar/index.html": {
            scripts: {
                body: [ "vendors", "bar" ]
            }
        },
        "foo/index.html": {
            scripts: {
                body: [ "vendors", "foo" ]
            }
        }
    }
}
