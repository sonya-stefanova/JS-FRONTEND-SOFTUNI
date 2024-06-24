function fruit(type, grams, price){
    let total=0;

    kg=grams/1000
    total=kg*price


    console.log(`I need \$${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`)

}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
