const { readFileSync, writeFile, existsSync, unlink } = require('fs');

const FILE_NAME = 'local_storage.json';

class LocalStorage {

    constructor() {

        if (existsSync(FILE_NAME)) {

            let file = readFileSync(FILE_NAME);
            this.items = JSON.parse(file);

        }
        else {
            this.items = {};
        }

    }

    get length() {
        return Object.keys(this.items).length;
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile(FILE_NAME, JSON.stringify(this.items), err => {
            if (err) console.error;
        })
    }

    getItem(key) {
        return this.items[key];
    }

    clear() {
        this.items = {};
        console.log(`Removing the file`);
        unlink(FILE_NAME, () => { console.log(`FILE IS REMOVED!!!`) })
    }


}

module.exports = new LocalStorage();