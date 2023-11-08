function censoredWords(text, targetWord) {
    let censoredWord = '*'.repeat(targetWord.length);
    
    while (text.includes(targetWord)) {
        text = text.replace(targetWord, censoredWord);
    }
    console.log(text);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');