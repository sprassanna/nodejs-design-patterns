var AccountFactory = require('./accountFactory');
// var Machine = require('./Machine');

// const user = new AccountFactory('Human');

const machine = new AccountFactory('NonHuman');

// console.log('USER > ', user.toString())
console.log('MACHINE > ', machine.toString())