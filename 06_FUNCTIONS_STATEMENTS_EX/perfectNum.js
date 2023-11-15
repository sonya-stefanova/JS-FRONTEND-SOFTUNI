function perfectNum(number) {
    let total = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            total += i;
        }
    }
    if(total === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    } 
}
perfectNum(6);
perfectNum(28);
perfectNum(1236498);