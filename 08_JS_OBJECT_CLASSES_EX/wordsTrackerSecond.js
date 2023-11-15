function wordsTracker(words) {
    let wordOccurances = {}

    const searchedTerms = words.shift().split(" ")

    for (let word of searchedTerms) {
        wordOccurances[word] = 0
    }
    for (let currTerm of searchedTerms) {
        for (let word of words) {
            if (word === currTerm) {
                wordOccurances[currTerm] += 1
            }
        }
    }

    for (const [k, v] of Object.entries(wordOccurances).sort((a, b) => b[1] - a[1])) {
        console.log(`${k} - ${v}`)
    }
}


wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'wordOccurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])