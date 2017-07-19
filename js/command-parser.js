function processCommands(commands) {

    //This is main function which get list of string , get result from CommandExecutor class and print result


    if(commands.length === 0){
        throw new Error('Error: invalid command parameters')
    }


    let initialText = commands.shift();
    print(initialText);

    for (let cmd of commands) {
        let CommandExecutor = require('./command-executor');
         let executor = new CommandExecutor(initialText,cmd)
        if(executor.executeCommand() !== undefined){
            initialText = executor.executeCommand();
            print(initialText)
        }


    }


function print(message) {
   console.log(message)
}
}

    processCommands(['aaaa', 'append aabb', 'prepend iiiiii' ,'reverse','insert 2 ss','delete 2','roll right'])


