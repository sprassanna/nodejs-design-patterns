class Mall {

    constructor() {
        this.sales = [];
    }

    notify(storeName, discount) {
        console.log(`User: CITY_MALL - omg , there is sale in store:${storeName} - discount: ${discount}`);
        this.sales.push({ storeName, discount });
    }
}

module.exports = Mall;