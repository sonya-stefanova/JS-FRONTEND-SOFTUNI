// function sameNumbers(num) {
//     let areSame = true;
//     const numToString = num.toString();
//     let sum = 0;

//     for (let i = 0; i < numToString.length; i++) {
//         if (i < (numToString.length - 1) && numToString[i] !== numToString[i + 1]) {
//             areSame = false;
//         }


//         sum += Number(numToString[i]);
//     }

//     console.log(areSame);
//     console.log(sum);
// }

function SameNumbers(number) {

    let sum = 0;
    let areSame = true;
    let current = String(number)[0];
    let maxNum=Number(current);

    for (i of String(number)){
        sum += Number(i)
        
        current=Number(i)

        if (maxNum!=current) {
            areSame=false;
        }
    }


    console.log(areSame)
    console.log(sum)

    
}

SameNumbers(2222222);
SameNumbers(1234);