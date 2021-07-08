class Logger {

    constructor() {
        this.logs = [];
    }

    getInstance() {
        return this;
    }

    getCount() {
        return this.logs.length;
    }

    log(message) {
        const time = new Date().toISOString();
        this.logs.push({ message, time });
        console.log(`${time}-${message}`);
    }


}


module.exports = new Logger();