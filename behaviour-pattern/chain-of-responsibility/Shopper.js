var Storage = require('./Storage');
var inventory = require('./data.json');
class Shopper {

    constructor(name) {
        this.name = name;

        var backpack = new Storage('backpack', inventory.backpack);
        var pouch = new Storage('pouch', inventory.pouch);
        var cupboard = new Storage('cupboard', inventory.cupboard, 5);
        var shop = new Storage('shop', inventory.shop);

        backpack.setNext(pouch);
        pouch.setNext(cupboard);
        cupboard.setNext(shop);

        this.storage = backpack;


    }

    find(itemName) {
        return this.storage.find(itemName);

    }

}

module.exports = Shopper;