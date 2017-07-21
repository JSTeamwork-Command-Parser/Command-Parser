function count(initialText, tokens) {
    if (tokens.length < 1){
        console.log('Error: invalid command parameters');
        return;
    }
    if(!Number.isNaN(Number(tokens[0]))){
        console.log('Error: invalid command parameters');
        return;
    }

    let wordsArr = initialText.split(' ');
    let occurrence = wordsArr.filter((val) =>
        val === tokens[0]).length;

    return occurrence;
}

module.exports = {count};