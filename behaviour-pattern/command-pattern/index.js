var { StopCommand, CreateCommand } = require('./commands');
var conductor = require('./conductor')
var { createInterface } = require('readline');

var rl = createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

console.log(`create <filename> <text> | exit`);
rl.prompt();

rl.on('line', input => {

    var [command, ...remaining] = input.split(' ');
    var [filename, ...fileText] = remaining
    var text = fileText.join(' ');

    switch (command) {
        case 'create':
            conductor.execute(new CreateCommand(filename, text))
            break;
        case 'exit':
            conductor.execute(new StopCommand())
            break;
        default:
            console.log(`${command} does not exist`);
            break;
    }
    rl.prompt();

})

