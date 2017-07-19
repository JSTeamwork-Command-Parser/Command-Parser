function roll(initialText,tokens) {
    if(tokens.length != 1 || (tokens[0] != 'left'&& tokens[0] != 'right')){
        console.log('Error: invalid command parameters')
        return;
    }
    let wordsArr = initialText.split(' ');
    if(tokens[0] == 'left'){
    let firstWord = wordsArr.shift();
    wordsArr.push(firstWord);

    }
    if(tokens[0] == 'right'){
        let lastWord = wordsArr[wordsArr.length-1];
        wordsArr.splice(0,0,lastWord);
        wordsArr.splice(wordsArr.length-1,1);


    }
    return wordsArr.join(' ');

}
module.exports = {roll}