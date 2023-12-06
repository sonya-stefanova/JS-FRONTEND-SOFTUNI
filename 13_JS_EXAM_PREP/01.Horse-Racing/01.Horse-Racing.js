function solve(input) {

    function retake(overTakingHorse, overTakenHorse) {
        const indexOverTakingHorse = horses.indexOf(overTakingHorse);
        const indexOverTakenHorse = horses.indexOf(overTakenHorse);

        if (indexOverTakingHorse < indexOverTakenHorse) {
            horses[indexOverTakingHorse] = overTakenHorse;
            horses[indexOverTakenHorse] = overTakingHorse;

            console.log(`${overTakingHorse} retakes ${overTakenHorse}.`);
        }
    }

    function trouble(givenHorse) {
        const indexOfGivenHorse = horses.indexOf(givenHorse);

        if (indexOfGivenHorse === 0 || indexOfGivenHorse === -1) {
            return;
        }

        const otherHorse = horses[indexOfGivenHorse - 1];
        const otherHorseIndex = horses.indexOf(otherHorse);

        horses[otherHorseIndex] = givenHorse;
        horses[indexOfGivenHorse] = otherHorse;

        console.log(`Trouble for ${givenHorse} - drops one position.`);
    }

    function rage(givenHorse) {
        const indexOfGivenHorse = horses.indexOf(givenHorse);
        const overTakenHorse = indexOfGivenHorse + 2;

        horses.splice(indexOfGivenHorse, 1)
        horses.splice(overTakenHorse, 0, givenHorse);

        console.log(`${givenHorse} rages 2 positions ahead.`)
    }

    function miracle() {
        const lastHorse = horses.shift();
        horses.push(lastHorse);

        console.log(`What a miracle - ${lastHorse} becomes first.`);
    }

    const horses = input.shift().split("|");

    const commandMapper = {
        "Retake": retake,
        "Trouble": trouble,
        "Rage": rage,
        "Miracle": miracle,
    };

    while (input[0] !== "Finish") {
        const [command, ...args] = input.shift().split(" ");
        commandMapper[command](...args);
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}