function reverse(initialText,tokens) {

    if(tokens.length !== 0){
       console.log('Error: invalid command parameters');
       return;
    }

    let wordsArr = initialText.split(' ');
    return wordsArr.reverse().join(' ');



}
module.exports = {reverse};