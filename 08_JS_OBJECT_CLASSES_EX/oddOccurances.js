function oddOccurancesTracker(words) {
  const oddOccurances = words.split(" ")
  .reduce((acc, word) => {
    word = word.toLowerCase();
    if (!acc.hasOwnProperty(word)) {
      acc[word] = 1;
    } else {
      acc[word] += 1;
    }
    return acc;
  }, {});

  let result = [];
  Object.keys(oddOccurances).forEach((occuredWord) => {
    if (oddOccurances[occuredWord] % 2 !== 0) {
      result.push(occuredWord);
    }
  });
  console.log(result.join(" "));
}

oddOccurancesTracker("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
