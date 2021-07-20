class conductor {

    execute(command) {
        console.log(`Executing : ${command.name}`);
        command.execute();
    }

}

module.exports = new conductor();