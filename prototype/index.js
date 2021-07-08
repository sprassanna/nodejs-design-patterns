var scout = require('./bag_prototype');


const blackBag = scout.clone();
blackBag.name = 'black';

blackBag.addItemToBag('food');

console.log(`blackBag ${blackBag.shoppingList}`)

const greenBag = scout.clone();
greenBag.name = 'green';

greenBag.addItemToBag('CLOTHES');

console.log(`BAGS are ready for a BANG!!!`);



console.log(`greenBag ${greenBag.shoppingList}`)

