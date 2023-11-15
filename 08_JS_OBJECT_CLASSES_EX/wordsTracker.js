function wordsTracker(input){
    const [searchTerms, ...words] = input;
    const wordOccurrences = searchTerms
    .split(' ') //to make a list of searched terms;
    .reduce((acc, curr) => { //to make an accumulator object for each search term;
        acc[curr] = 0;

        return acc;
    }, {});

    words.forEach((word) => {
        if (wordOccurrences.hasOwnProperty(word)) {
            wordOccurrences[word] +=1;
        };

         
});
    for (const [k, v] of Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1])) {
        console.log(`${k} - ${v}`)
    }  

}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])