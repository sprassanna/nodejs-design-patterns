var { Item, GoldenItem, MetalItem } = require('./Item');
var Shopper = require('./Shopper');

const eye_glass = new Item('Anti UV Light Specs', 10.00)

const goldenFrameSpecs = new GoldenItem(eye_glass, 'EYE SPECS');

const metalFrameSpecs = new MetalItem(eye_glass, 'EYE SPECS');

const ring = '';

const prassanna = new Shopper('prassanna', 50000000);

prassanna.purchase(metalFrameSpecs);

prassanna.purchase(goldenFrameSpecs);

prassanna.printStatus()