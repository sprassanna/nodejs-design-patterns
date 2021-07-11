var userBuilder = require('./userBuilder');

class User {

    constructor(builder) {
        this.name = builder.name;
        this.type = builder.type || 'bot';
        this.admin = builder.admin;
        this.canControlApp = builder.canControlApp
        this.workTime = builder.workTime || '12hrs';
        this.salary = builder.salary || 0;


    }

    get toString() {
        return JSON.stringify(this);
    }
}

module.exports = User;