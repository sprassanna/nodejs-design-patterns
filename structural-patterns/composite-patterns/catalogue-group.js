class CatalogueGroup {

    constructor(name, composites) {
        this.name = name;
        this.composites = composites;
    }

    get total() {
        return this.composites.reduce((total, item) => {
            return total + item.total;
        }, 0)
    }

    print() {
        this.composites.forEach(item => item.print());
    }

}

module.exports = CatalogueGroup;