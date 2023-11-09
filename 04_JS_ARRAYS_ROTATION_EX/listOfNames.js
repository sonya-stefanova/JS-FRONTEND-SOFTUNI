function listOfNames(list) {
    list.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for (let i = 0; i < list.length; i++) {
        let currentNum=i+1;
        let currentName=list[i];
        console.log(`${currentNum}.${currentName}`);
    }  
}

listOfNames(["John", "Bob", "Christina", "Ema"]);