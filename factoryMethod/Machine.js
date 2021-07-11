var Account = require('./Account');

class Machine extends Account {
    constructor(id, name) {
        super(name);
        this.id = id;
    }

}

module.exports = Machine;