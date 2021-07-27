var loggerStrategy = require('./logger_strategy');
var logConfig = require('./config.json');

class Logger {

    constructor(strategy = 'toConsole') {
        this.logs = [];
        this.strategy = loggerStrategy[strategy];
    }

    logMessage(timestamp, message) {
        this.logs.push({ timestamp, message });
        this.strategy(timestamp, message);
    }

    changeStrategy(newStrategy) {
        this.strategy = loggerStrategy[newStrategy];
    }

}

module.exports = new Logger(logConfig.logs.strategy);