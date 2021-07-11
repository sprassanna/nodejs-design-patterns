var User = require('./User');
var Machine = require('./Machine');

class AccountFactory {

    constructor(type, id, name, email) {
        if (type === 'Human') {
            console.log(`HUMAN - Lets Party !!!`);
            return new User('userraj1', 'raj@test.com', 'Raj');
        }
        else if (type === 'NonHuman') {
            console.log(`OMG NON HUMAN - BOT !!!`);
            return new Machine('id1', 'Autobot');
        }

    }

}

module.exports = AccountFactory;