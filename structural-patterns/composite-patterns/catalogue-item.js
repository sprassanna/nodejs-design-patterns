class CatalogueItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    print() {
        console.log(`Name : ${this.name} ................ Price : ${this.price}`)
    }

}

module.exports = CatalogueItem;