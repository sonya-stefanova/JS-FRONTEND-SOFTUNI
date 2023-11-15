function circle_area(arg) {

    let output;
    let argumentType = typeof(arg);

    if (argumentType === "number") {
        output = (Math.PI * Math.pow(arg, 2)).toFixed(2);

    } else {
        output = "We can not calculate the circle area, because we receive a " + argumentType +".";
    }

    console.log(output);
}

circle_area(5);
circle_area('name');
circle_area('5');