function deleteIndex(initialText,tokens) {

    if(tokens.length < 1){
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
    wordsArr.splice(index,1)
    return wordsArr.join(' ');


}
module.exports = {deleteIndex}