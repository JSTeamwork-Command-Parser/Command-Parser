function  append(initialText,tokens) {


        let text = initialText + ' ' + tokens.join(' ');
        return  text ;

}
module.exports = {append};