var logger = require('./Logger');


class Shopper {

    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.getInstance().log(`Shopper name : ${name} and has money : ${money}`);

    }


}

module.exports = Shopper;