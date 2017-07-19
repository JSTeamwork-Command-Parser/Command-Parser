function  prepend(initialText,tokens) {

        let text = tokens.join(' ') + ' '+ initialText;
        return text ;

}
module.exports = {prepend}