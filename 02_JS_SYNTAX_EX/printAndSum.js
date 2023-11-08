function printAndSum(m,n) {

    let sum = 0;
    const digitsInARow = [];
    
    for (let i = m; i <= n; i++) {
        sum += i;
        digitsInARow.push(i);
    }

    console.log(digitsInARow.join(" "));
    console.log(`Sum: ${sum}`);

}

printAndSum(0, 26);
printAndSum(50,60);