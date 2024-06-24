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

    // let sum = 0;
    // let areSame = true;
    // let current = String(number)[0];
    // let maxNum=Number(current);

    // for (i of String(number)){
    //     sum += Number(i)
        
    //     current=Number(i)

    //     if (maxNum!=current) {
    //         areSame=false;
    //     }
    // }
    // let digits = Array.from(String(number), Number);
    let digits = number.toString().split('').map(n=>Number(n));

    const isConsistent = new Set(digits).size === 1;
    const total = digits.reduce((acc, num)=>acc+num, 0);

    console.log(digits);
    console.log(isConsistent);
    console.log(total);

    
}

SameNumbers(2222222);
SameNumbers(1234);