class CommandExecutor{


    constructor(text,command){

        this.command = command;
        this.text = text;
    }
    //  Get command name and pharameters and invoke function which execution this command ,if not have function throw error
    //YOU JUST MAKE NEW FILE AND FUNCTION INTO THIS FILE WHICH CHEK FOR VALID PHARAMETERS AND EXECUTION COMMAND
    //NOTE:FUNCTION AND FILE MUST HAVE NAME LIKE COMMAND SEE APPEND AND PREPEND FOR EXAMPLE
    // EVERY FUNCTION MUST HAVE 2 ARGUMENTS: TEXT(initialText) AND PHARAMETERS ON COMMAND(tokens)
    executeCommand(){
       let pharams = this.command.split(' ');
       let cmd = pharams.shift();
       try {
           if(cmd === 'delete') { cmd = 'deleteIndex'}
           let actionResult =  require(`./${cmd}`)[cmd](this.text,pharams)
           return actionResult;
       }
     catch (Error){
          console.log('Error: invalid command');
     }


    }


}
module.exports =  CommandExecutor;