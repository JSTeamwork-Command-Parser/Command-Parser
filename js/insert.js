function insert(initialText,tokens) {

    if(tokens.length < 2){
        console.log('Error: invalid command parameters')
        return;
    }
    let index = tokens[0];
    if(Number.isNaN(Number(index))){
        console.log('Error: invalid command parameters')
        return;
    }
    if(index < 0 || index >= initialText.split(' ').length){
        console.log(`Error: invalid index ${index}`)
        return;
    }

    let wordsArr = initialText.split(' ');
     wordsArr.splice(index,0,tokens[1])
    return wordsArr.join(' ');


}
module.exports = {insert}