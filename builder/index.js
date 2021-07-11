var UserBuilder = require('./userBuilder');

// var user1 = new User('prassanna', 'human', 'true', 'true', '8hrs', '2crores/annum');

// var user2 = new User('bot', 'machine', false, false, '12hrs');

var user1 = new UserBuilder('prassanna')
    .addType('user')
    .makeAdmin()
    .canControlApp()
    .payCheck('2 Crores /annum')
    .build();

var user2 = new UserBuilder('slack')
    .addType('machine-bot')
    .workTimings('12hrs')
    .build();

console.log('prassana >', user1);

console.log('BOT', user2);
