var Account = require('./Account');

class User extends Account {
    constructor(id, email, name) {
        super(name);
        this.id = id;
        this.email = email;
    }

}

module.exports = User;