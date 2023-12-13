function astronautAdventure(input) {
    const astroNum = Number(input.shift());
    const astronautsInfo = input.slice(0, astroNum);

    
    const astronauts = astronautsInfo.reduce((acc, currAstro) => {
      
      const [name, oxygenLevel, energyReserves] = currAstro.split(" ");
      if (!acc.hasOwnProperty(name)) {
        acc[name] = [];
      };

      acc[name] = {
        name,
        oxygenLevel: Number(oxygenLevel),
        energyReserves: Number(energyReserves),
      };
      
      input.shift();
      return acc;
    }, {});

    const commandMapping = {
      "Explore": explore,
      "Refuel": refuel,
      "Breathe": breathe,
    };

    let commandLine;

    while ((commandLine = input.shift()) !== "End") {
      const [commandName, ...rest] = commandLine.split(` - `);
      commandMapping[commandName](...rest);
    }

    function explore(name, energyNeeded) {
      const astronaut = astronauts[name];
      if (astronaut.energyReserves >= energyNeeded) {
        astronaut.energyReserves -= energyNeeded;
        console.log(
          `${astronaut.name} has successfully explored a new area and now has ${astronaut.energyReserves} energy!`
        );
      } else {
        console.log(`${astronaut.name} does not have enough energy to explore!`);
      };
    };

    function refuel(name, refuelAmount) {
        if (astronauts.hasOwnProperty(name)) {
            let oldEnergy = astronauts[name].energyReserves;
            astronauts[name].energyReserves += Number(refuelAmount);
            if(astronauts[name].energyReserves > 200){
                astronauts[name].energyReserves = 200;                    
            }
            console.log(`${name} refueled their energy by ${astronauts[name].energyReserves - oldEnergy}!`);
        }
    }

    function breathe(name, refuelAmount) {
        if (astronauts.hasOwnProperty(name)) {
            if (astronauts[name].oxygenLevel >= Number(refuelAmount)) {
                oldOxigenState = astronauts[name].oxygenLevel;
                astronauts[name].oxygenLevel += Number(refuelAmount);
                if(astronauts[name].oxygenLevel > 100){
                    astronauts[name].oxygenLevel = 100;                    
                }
                console.log(`${name} took a breath and recovered ${astronauts[name].oxygenLevel - oldOxigenState} oxygen!`);
            }
        }
    }

    let entries = Object.entries(astronauts);
    for (const [name, currAstronaut] of entries) {
      console.log(
        `Astronaut: ${name}, Oxygen: ${currAstronaut.oxygenLevel}, Energy: ${currAstronaut.energyReserves}`
      );
    }
  }

astronautAdventure([
    '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'
]
);