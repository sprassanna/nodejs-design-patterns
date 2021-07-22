var Backpack = require('./backpack');

class Iterator {

    constructor(items = []) {
        this.items = items;
        this.index = 0;
    }

    first() { var [first] = this.items; return first };

    last() {
        var [last] = [...this.items].reverse();
        return last;
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }

        return this.items[this.index]

    }

    previous() {
        if (this.hasPrevious()) {
            this.index -= 1;
        }

        return this.items[this.index];
    }

    hasNext() { return this.index < this.items.length - 1; }

    hasPrevious() { return this.index != 0 }

    current() { return this.items[this.index]; }



}
module.exports = Iterator;