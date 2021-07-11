var User = require('./user');

class UserBuilder {

    constructor(name) {
        this.name = name;
        return this;
    }


    addType(type) {
        this.type = type;
        return this;
    }

    makeAdmin() {
        this.admin = true;
        return this;
    }

    canControlApp() {
        this.canControlApp = true;
        return this;
    }

    workTimings(workTime) {
        this.workTime = workTime || '8hrs';
        return this;
    }

    payCheck(salary) {
        this.salary = salary;
        return this;
    }

    build() {
        return new User(this);
    }



}

module.exports = UserBuilder;