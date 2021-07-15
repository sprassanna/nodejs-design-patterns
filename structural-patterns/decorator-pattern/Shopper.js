class Shopper {

    constructor(name, account = 0) {
        this.name = name;
        this.account = account;
        this.items = [];
    }

    purchase(item) {
        if (item.price > this.account) {
            console.log(`Cannot afford the item ${item.name}`);
        }
        else {
            console.log(`Purchasing the item ${item.name} `);
            this.account -= item.price;
            this.items.push(item);
        }
    }

    printStatus() {
        console.log(`${this.name} has purchased ${this.items.length} items`);
        this.items.forEach(item => {
            console.log(` * item:${item.name} price:${item.price}`);
        })
        console.log(`Balance is ${this.account}`);
    }
}

module.exports = Shopper;