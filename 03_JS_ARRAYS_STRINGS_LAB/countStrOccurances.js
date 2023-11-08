function countStrOccurrences(text, targetWord){
    let listOfWords = text.split(" ");
    let counter = 0;

    for (let currentWord of listOfWords) {
        if (currentWord === targetWord) {
            counter++;
        }
    }
    console.log(counter);
}

countStrOccurrences('This is a word and it also is a sentence', 'is');
countStrOccurrences('softuni is great place for learning new programming languages', 'softuni');


// function countStrOccurrences(text, targetWord) {
//     let regexp = new RegExp("\\b" + targetWord + "\\b", "g");
//     let matches = text.match(regexp);
//     if (matches) {
//         console.log(matches.length);
//     } else {
//         console.log(0);
//     }
// }


