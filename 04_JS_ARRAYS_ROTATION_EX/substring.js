function substring(word, text) {
    let sentenceArr = text.split(' ');

    for (let i = 0; i < sentenceArr.length; i++) {
        if(sentenceArr[i].toLowerCase() === word) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`)
}


substring('javascript',
'JavaScript is the best programming language'
);
substring('python',
'JavaScript is the best programming language'
);