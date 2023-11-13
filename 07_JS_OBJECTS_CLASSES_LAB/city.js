function cityPrint(cityInput){
//     SOLUTION1:
// for (const [key, value] of Object.entries(cityInput)) {
//         console.log(`${key} -> ${value}`);
//       }
// }
//     SOLUTION2:
//     for (const key in cityInput) {
//         console.log(`${key} -> ${cityInput[key]}`);
//     }

    //Solution3:
    Object.entries(cityInput).forEach(function(pair) {
        [key, value] = pair
        console.log(`${key} -> ${value}`);
    })

}

const cityDetails = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}

console.log(cityPrint(cityDetails)
)

//Answer:
//name -> Sofia
// area -> 492
// population -> 1238438
// country -> Bulgaria
// postCode -> 1000
