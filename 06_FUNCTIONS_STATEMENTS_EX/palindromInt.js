function palindromInt(args) {
    let argsLength = args.length;

    for (let i = 0; i < argsLength; i++) {
        let numberAsString = (args[i]).toString();
        let reversedString = numberAsString.split('').reverse().join('');

        console.log(numberAsString === reversedString);

    }
}

palindromInt([123,323,421,121])