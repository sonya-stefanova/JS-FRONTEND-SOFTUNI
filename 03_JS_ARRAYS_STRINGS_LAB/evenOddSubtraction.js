function evenOddSubtraction(args){
    let evenNums=0;
    let oddNums=0;
    let diff=0;

    for (let arg of args){
        if (arg % 2 === 0) {
            evenNums+=arg;
        } else {
            oddNums+=arg;
        }
    }

    diff = evenNums-oddNums;
    console.log(diff)
}

evenOddSubtraction([1,2,3,4,5,6]);
evenOddSubtraction([3,5,7,9]);
evenOddSubtraction([2,4,6,8,10]);