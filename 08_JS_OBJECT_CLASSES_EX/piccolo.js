function piccoloManager(input) {
    const parking = new Set();
  
    input.forEach((car) => {
      const [command, number] = car.split(", ");
  
      if (command === "IN") {
        parking.add(number);
      } else if (command === "OUT") {
        parking.delete(number);
      }
    });
  
    const carNumbers = console.log(Array
        .from(parking)
        .sort()
        .join("\n")
        );
    // carNumbers.forEach((number) => {
    //     console.log(number);
    // })
    
  }
  
  piccoloManager([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
  ]);