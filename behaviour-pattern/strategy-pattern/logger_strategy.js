var path = require('path');
var { appendFile } = require('fs');
class LoggerStrategy {

    constructor(strategy = 'toConsole') {
        this.strategy = LoggerStrategy[strategy];
    }

    static noDate(timeStamp, message) {
        console.log(`${message}`);
    }

    static toConsole(timeStamp, message) {
        console.log(`${timeStamp} : ${message}`);
    }

    static toFile(timeStamp, message) {
        var fullPath = path.join(__dirname, 'logs.txt');

        appendFile(fullPath, `${timeStamp} : ${message} \n`, err => {
            if (err) console.log(err);
        })

    }



}

module.exports = LoggerStrategy;