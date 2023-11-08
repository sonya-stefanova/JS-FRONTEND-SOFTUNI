// function sumDigits(num){
//     let sum=0;
//     numAsString=num.toString(); // int into str//

//     for (let i=0; i < numAsString.length; i++){
//         sum+=Number(numAsString[i])
        
//     }
//     console.log(sum)
// }


function sumDigits(number) {
    let sum = 0;

    for (i of String(number)){
        sum += Number(i)
    }

    return sum
}


console.log(sumDigits(245678));

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
sumDigits(3);