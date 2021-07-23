class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`User: ${this.name} - omg , there is sale in store:${storeName} - discount: ${discount}`);
    }
}

module.exports = Shopper;