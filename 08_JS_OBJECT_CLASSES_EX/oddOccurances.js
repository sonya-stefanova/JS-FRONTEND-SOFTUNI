function oddOccurancesTracker(words) {
  const oddOccurances = words.split(" ")
  .reduce((acc, word) => {
    if (!acc.hasOwnProperty(word.toLowerCase())) {
      acc[word.toLowerCase()] = 1;
    } else {
      acc[word.toLowerCase()] += 1;
    }

    return acc;
  }, {});

  let result = [];
  Object.keys(oddOccurances).forEach((key) => {
    if (oddOccurances[key] % 2 !== 0) {
      result.push(key);
    }
  });
  console.log(result.join(" "));
}

oddOccurancesTracker("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
