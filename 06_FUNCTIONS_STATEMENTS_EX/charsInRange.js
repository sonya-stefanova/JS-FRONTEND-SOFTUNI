function charsRange(firstChar, lastChar) {
    let first = firstChar.charCodeAt();
    let last = lastChar.charCodeAt();
    let arrayOfChars = [];
    let min = Math.min(first, last);
    let max = Math.max(first, last)

    for (i = min + 1; i < max; i++) {
    arrayOfChars.push(String.fromCharCode(i))
    }
    console.log(arrayOfChars.join(' '))
}

charsInRange(m, t);
charsInRange(z, m);