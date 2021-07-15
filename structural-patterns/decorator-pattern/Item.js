class Item {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        console.log(`${this.name} ${this.price}`)
    }

}

class GoldenItem extends Item {

    constructor(baseItem, name) {
        super(`Golden ${name}`, 2000 + baseItem.price);
    }
}

class MetalItem extends Item {

    constructor(baseItem, name) {
        super(`METAL ${name}`, 100 + baseItem.price);
    }
}

module.exports = { Item, GoldenItem, MetalItem };