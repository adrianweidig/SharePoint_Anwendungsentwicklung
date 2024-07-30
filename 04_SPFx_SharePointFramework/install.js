const fs = require('fs');
const lockedVersionFile = 'package-lock.json';
// const lockedVersionFile = 'npm-shrinkwrap.json';
const lockedVersionJson = JSON.parse(fs.readFileSync(lockedVersionFile));
if (lockedVersionJson.packages) {
    const vinylFSJson = lockedVersionJson.packages["node_modules/vinyl-fs"];
    if (vinylFSJson && vinylFSJson["dependencies"] && vinylFSJson["dependencies"]["graceful-fs"]) {
        vinylFSJson["dependencies"]["graceful-fs"] = "npm:graceful-fs@4.2.11";
    }

    const gulpSassJson = lockedVersionJson.packages["node_modules/gulp-sass"];
    console.log(gulpSassJson);
    if (gulpSassJson && gulpSassJson["dependencies"] && gulpSassJson["dependencies"]["node-sass"]) {
        gulpSassJson["dependencies"]["node-sass"] = "npm:sass@1.32.0";
    }
}
fs.writeFileSync(lockedVersionFile, JSON.stringify(lockedVersionJson, undefined, 2));