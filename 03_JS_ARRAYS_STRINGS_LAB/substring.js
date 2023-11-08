function substring(expression, startingIndex, counter) {
    let endIndex=startingIndex+counter;
    let word = expression.substring(startingIndex, endIndex);
    console.log(word);

}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);
