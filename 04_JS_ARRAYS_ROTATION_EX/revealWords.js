function revealWords(words, sentence) {
    words = words.split(', ');
     
    for (let i = 0; i < words.length; i++){
        currentWord=words[i];
        replacement = '*'.repeat(currentWord.length);
        if (sentence.includes(replacement)) {
        sentence = sentence.replace(replacement , currentWord);
        }
    }
    console.log(sentence);
}
revealWords('great','softuni is ***** place for learning new programming languages');
revealWords('great, learning','softuni is ***** place for ******** new programming languages');