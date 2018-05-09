const fs = require("fs");
const path = require("path");
function Loader() {}
const entriesDir = path.join(__dirname, "../src/entries");
Loader.prototype.loadChunk = function() {
  const dirs = fs.readdirSync(entriesDir);
  console.log(dirs);

  const arr = dirs.reduce((arr, i) => {
    const stats = fs.statSync(path.join(entriesDir, i));
    if (stats.isDirectory()) {
      const js = path.join(entriesDir, i, "index.js");
      const html = path.join(entriesDir, i, "index.html");
      arr.push({
        js,
        html
      });
    }
    return arr;
  }, []);
  return arr;
};

const load = new Loader();
console.log(load.loadChunk())
// module.exports = new Loader();
