function pianist(input) {
    const num = input.shift();
    const pianistArray = input.slice(0,num);
    const pianists = pianistArray.reduce((acc, currPianist) => {

        const [piece, composer, key] = currPianist.split('|')
        if (!acc.hasOwnProperty(piece)) {
            acc[piece] = [];
            };
        acc[piece] = {composer, key};

        input.shift();
        return acc;
    }, {});
    // console.log(JSON.stringify(pianists));

    const commandMapping = {
        "Add": addCommand,
        "Remove": removeCommand,
        "ChangeKey": changeKeyCommand,
      };
  
    let commandLine;
  
    while ((commandLine = input.shift()) !== "Stop") {
        const [commandName, ...rest] = commandLine.split(`|`);
        commandMapping[commandName](...rest);
    }   

    function addCommand(piece, composer, key) {
        if (pianists.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
            return;}

        pianists[piece] = {composer: composer, key: key};
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        };
        

    function removeCommand(piece){
        if (!pianists.hasOwnProperty(piece)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            return;
        }
        delete pianists[piece];
        console.log(`Successfully removed ${piece}!`)
    }

    function changeKeyCommand(piece, newKey){
        if (!pianists[piece]){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            return;
        };
        
        pianists[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
    }

    let pianistsIterable = Object.entries(pianists);
    for (const [piece, info] of pianistsIterable) {
      console.log(
        `${piece} -> Composer: ${info.composer}, Key: ${info.key}`
      );
    }
};

pianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
      
)