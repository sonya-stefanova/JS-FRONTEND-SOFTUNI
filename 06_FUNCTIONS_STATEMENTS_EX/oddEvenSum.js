function oddEvenSum(numbers) {
    let oddSum=0;
    let evenSum=0;
    let result = ' '
    chars=numbers.toString();

    for (let ch of chars) {
        num=Number(ch);
        if (num%2===0){
            evenSum+=num;
        } else {
            oddSum+=num;
        }
    }


    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    
}

console.log(oddEvenSum(123));