var logger = require('./Logger');


class Store {

    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;

        logger.getInstance().log(`New Store ${this.name} has ${this.inventory.length} count in Store `);

    }

}

module.exports = Store;