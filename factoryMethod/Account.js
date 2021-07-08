class Account {

    constructor(name = 'unnamed person') {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Account;