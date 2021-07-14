var catalogueItem = require('./catalogue-item');
var catalogueGroup = require('./catalogue-group');

var OfficeShoe = new catalogueItem('Leather Shoe', 250);

var kid1Shoe = new catalogueItem('School Shoe', 150);

var kid2Shoe = new catalogueItem('School Shoe', 150);

var shoes = new catalogueGroup('All SHoes', [OfficeShoe, kid1Shoe, kid2Shoe]);

var food = new catalogueItem('Milkshake', 50);

var foodAndShoe = new catalogueGroup('Food &  SHoes', [food, shoes]);

console.log(`foodAndShoe TOTAL : ${foodAndShoe.total}`)
foodAndShoe.print();
