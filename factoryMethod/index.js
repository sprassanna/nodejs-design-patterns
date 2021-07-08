var User = require('./User');
var Machine = require('./Machine');

const user = new User('userraj1', 'raj@test.com', 'Raj');

const machine = new Machine('id1', 'Autobot');

console.log('USER > ', user.toString())
console.log('MACHINE > ', machine.toString())