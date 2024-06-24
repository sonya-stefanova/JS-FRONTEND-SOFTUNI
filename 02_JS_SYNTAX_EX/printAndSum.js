function printAndSum(m,n) {

    // let sum = 0;
    // const digitsInARow = [];
    
    // for (let i = m; i <= n; i++) {
    //     sum += i;
    //     digitsInARow.push(i);
    // }

    // console.log(digitsInARow.join(" "));
    // console.log(`Sum: ${sum}`);

    let total = 0;
    const numbersInARow = [];

    for (let indx=m; indx<=n; indx++) {
        numbersInARow.push(indx);
        total+=indx;
    }

    console.log(numbersInARow.join(" "));
    console.log(`Total: ${total}`);

}

printAndSum(0, 26);
printAndSum(50,60);