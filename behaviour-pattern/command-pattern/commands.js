var { writeFile, unlink } = require('fs');
var path = require('path');

class StopCommand {

    execute() {
        console.log('Stop the Process');
        process.exit(0);
    }

    get name() {
        return 'Stop Command';
    }
}

class CreateCommand {

    constructor(filename, text) {
        this.filename = filename;
        this.body = text;
        this.fullPath = path.join(__dirname, filename);

        console.log(`${this.filename}  ::  `)
        console.log(`${this.body}  ::  `)
        console.log(`${this.fullPath}  ::   `)
    }
    execute(filename, text) {
        writeFile(this.fullPath, this.body, text, f => f);
    }



    get name() {
        return 'Create Command';
    }
}


module.exports = { StopCommand, CreateCommand };