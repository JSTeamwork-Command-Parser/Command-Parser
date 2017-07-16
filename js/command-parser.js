function processCommands(commands) {
    let initialText = commands.shift();
    let command = (function () {
        let text = initialText;
        return {
            append: (t) => console.log(text = text + t),
            prepend: (t) => console.log(text = t + text)


        };
    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        command[cmdName](arg);
    }
}

processCommands(['aaaa', 'append oooo', 'prepend iiiiii'])


