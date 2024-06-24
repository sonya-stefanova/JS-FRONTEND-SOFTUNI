function vacation(num, type, day) {
    let total_price;
    let price;

    if (day === "Friday"){
        if (type==="Students"){
            price=8.45; 
        } else if (type==="Business"){
            price=10.90;
        } else {
            price=15;
        }

    } else if (day==="Saturday"){
        if (type==="Students"){
            price=9.80; 
        } else if (type==="Business"){
            price=15.60;
        } else {
            price=20;
        }
    } else {
        if (type==="Students"){
            price=10.46; 
        } else if (type==="Business"){
            price=16;
        } else {
            price=22.50;
        }
    }

    total_price=num*price

    if (num>=30 && type==="Students"){
        total_price*=0.85;
    } else if (type==="Business" && num>=100){
        discount=10*price
        total_price-=discount;
    } else if(type==="Regular" && (num>=10 && num<=20)){
        total_price*=0.95;
    }

    return console.log(`Total price: ${total_price.toFixed(2)}`);

}


vacation(110, "Business", "Sunday");