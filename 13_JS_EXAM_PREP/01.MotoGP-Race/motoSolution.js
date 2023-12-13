function motoSolution(input) {

    const numOfRiders = Number(input.shift());
    const ridersData = input.slice(0, numOfRiders);

    
    const riders = ridersData.reduce((acc, currRider) => {
        [riderName, fuelCapacity, position] = currRider.split('|');

        if (!acc.hasOwnProperty(riderName)) {
            acc[riderName] = {
                fuelCapacity: Number(fuelCapacity),
                position: Number(position),
            };
        }
        input.shift();
        return acc;
    }, {});

    const commandMapping = {
        "StopForFuel": stopForFuel,
        "Overtaking": overtaking,
        "EngineFail": engineFail,
      };

    while (input[0] !== "Finish") {
        let takenInput = input.shift();
        takenInput = takenInput.split(` - `);
        [command, ...args] = takenInput
        commandMapping[command](...args);
        const found = array1.find((element) => element > 10);
        

    }
        function stopForFuel(rider, minFuel, changedPositions) {
            minFuel = Number(minFuel);
            changedPositions = Number(changedPositions);

            if (riders.hasOwnProperty(rider)) {
                if (riders[rider].fuelCapacity < minFuel) {
                    riders[rider].position = changedPositions;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPositions}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
            }
        }

        function overtaking(riderOne, riderTwo) {
            if (riders.hasOwnProperty(riderOne) && riders.hasOwnProperty(riderTwo)) {
                if (riders[riderOne].position < riders[riderTwo].position) {
                    const tempPosition = riders[riderOne].position;
                    riders[riderOne].position = riders[riderTwo].position;
                    riders[riderTwo].position = tempPosition;

                    console.log(`${riderOne} overtook ${riderTwo}!`);
                }
            }
        }

        function engineFail(rider, lapsLeft) {
            if (riders.hasOwnProperty(rider)) {
                delete riders[rider];
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            }
        }
        Object.entries(riders).forEach(([rider, riderInfo]) => {
            console.log(`${rider}\nFinal position: ${riderInfo.position}`);
        });
}

// Example usage:
motoSolution([
    "3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
]);
