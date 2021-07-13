var localStorage = require('./localStorage');

console.log(`Local Storage Length ${localStorage.length}`);
var userId = localStorage.getItem('user_id');

if (!userId) {
    console.log(`User id (${userId}) not found`);
    localStorage.setItem('data', 'VGVzdFRoZURhdGE=');
    localStorage.setItem('user_id', 123);
}
else {
    console.log(`User id (${userId}) FOUND !!!`);
    localStorage.clear();
}