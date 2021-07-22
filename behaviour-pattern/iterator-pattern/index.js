var Backpack = require('./backpack');

var readline = require('readline');

var Iterator = require('./iterator');


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const bagList = [
    new Backpack('kid1', 'green'),
    new Backpack('kid2', 'yellow'),
    new Backpack('kid3', 'pink'),
    new Backpack('kid4', 'violet'),
];

const bagPackListIterator = new Iterator(bagList);

process.stdin.on('keypress', (str, key) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch (key.name) {
        case 'right':
            process.stdout.write(`right :  ${bagPackListIterator.next().name}`);
            break;
        case 'left':
            process.stdout.write(`left :  ${bagPackListIterator.previous().name}`);

            break;
        case 'up':
            process.stdout.write(`up :  ${bagPackListIterator.first().name}`);
            break;
        case 'down':
            process.stdout.write(`down  :  ${bagPackListIterator.last().name}`);
            break;

        case 'c':
            if (key.ctrl) {
                process.exit(0);
            }
            break;
        default:
            process.stdout.write(`Happy weekend!!! ${key.name}`);

    }

})