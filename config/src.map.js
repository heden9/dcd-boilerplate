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
        home: "src/entries/home/index.js",
        invite: "src/entries/invite/index.js",
        prizes: "src/entries/prizes/index.js"
    },
    pages: {
        "home/index.html": {
            scripts: {
                body: [ "vendors", "home" ]
            }
        },
        "invite/index.html": {
            scripts: {
                body: [ "vendors", "invite" ]
            }
        },
        "prizes/index.html": {
            scripts: {
                body: [ "vendors", "prizes"]
            }
        }
    }
}
