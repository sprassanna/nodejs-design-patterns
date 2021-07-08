var Shoulderbag = require('./Shoulderbag');


const scout = new Shoulderbag();

scout.addItemToBag('plan');
scout.addItemToBag('route');
scout.addItemToBag('keys');

module.exports = scout;