class Storage {

    constructor(name, inventory = [], deliveryTime = 0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }

    setNext(item) {
        this.next = item;
    }

    lookupItem(itemName) {
        var data = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[data];
    }

    find(itemName) {
        const dataFound = this.lookupItem(itemName);
        if (dataFound) {

            return {
                name: dataFound.name,
                quantity: dataFound.quantity,
                deliveryTime: this.deliveryTime == 0 ? 'now' : this.deliveryTime + ' day(s)',
            };

        }
        else if (this.next) {
            return this.next.find(itemName);
        }
        else {
            console.log(`not found in our warehouse`)
        }
    }
}

module.exports = Storage;