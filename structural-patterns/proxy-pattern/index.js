
var path = require('path');
var fs_proxy = require('./fs_proxy');

const fsProxy = new fs_proxy(require('fs'));

var textFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

const callback = (err, content) => {

    if (err) {
        console.log(`\x07`);
        console.error(err);
        process.exit(0);
    }

    console.log(`$$$$$$`)
    console.log(content);
    console.log(`$$$$$$`)
}

// fsProxy.readFile(textFile, 'UTF-8', callback);

fsProxy.readFile(mdFile, 'UTF-8', callback);