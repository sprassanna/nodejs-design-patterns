class Shoulderbag {

    constructor(name, shoppingList = []) {
        this._name = name;
        this._shoppingList = shoppingList;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        console.log(`NAME IS ${this._name}`);
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList;
    }

    addItemToBag(item) {
        this._shoppingList.push(item);
    }

    clone() {
        let proto = Object.getPrototypeOf(this);
        let cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }

}

module.exports = Shoulderbag;