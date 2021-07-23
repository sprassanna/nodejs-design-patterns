var Shopper = require('./shopper');
var Store = require('./store');
var Mall = require('./mall');

var teenShopper = new Shopper('teen');
var agedShopper = new Shopper('elders');

var supermarket = new Store('supermarket');
var fruitsBazzar = new Store('fruitsShop');

var cityMall = new Mall();

supermarket.subscribe(teenShopper);
supermarket.subscribe(agedShopper);

fruitsBazzar.subscribe(cityMall);

supermarket.sale(10);
fruitsBazzar.sale(5);



