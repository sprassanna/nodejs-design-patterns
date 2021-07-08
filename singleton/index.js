const Store = require('./Store');
const Shopper = require('./Shopper');
var logger = require('./Logger');


logger.getInstance().log(`started`);
var shopper = new Shopper('Prassanna', '5 Crores');
var store = new Store('savings', [
    {
        item: 'nps',
        max: '30L'
    },
    {
        item: 'land',
        max: '50L'
    }
])

logger.getInstance().log(`completed`);

logger.getInstance().log(`Count of Logs ${logger.getInstance().getCount()} `);

logger.getInstance().logs.map(item => logger.getInstance().log(item.message));