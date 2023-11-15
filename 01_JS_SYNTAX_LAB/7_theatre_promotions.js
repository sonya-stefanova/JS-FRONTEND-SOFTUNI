function ticket_price(day, age) {
    let price;
    const error='Error'

    if (day == "Weekday"){
        if (0 <= age && age <= 18) {
            price = 12    
        }
        else if (18 < age && age <= 64) {
            price = 18
        }
        else if (65 < age && age <= 122) {
            price = 12
        }
        else {
            return error
        }
    }
    else if (day == "Weekend") {
        if (0 <= age && age <= 18) {
            price = 15    
        }
        else if (18 < age && age <= 64) {
            price = 20
        }
        else if (65 < age && age <= 122) {
            price = 15
        }
        else {
            return error
        }
    }
    else if (day == "Holiday") {
        if (0 <= age && age <= 18) {
            price = 5    
        }
        else if (18 < age && age <= 64) {
            price = 12
        }
        else if (65 < age && age <= 122) {
            price = 10
        }
        else {
            return error
        }
    }

    else {
        return error}

    return `${price}$`
}

console.log(ticket_price('Holiday', 15));
console.log(ticket_price('Weekday', 42));
console.log(ticket_price('Holiday', 15));
console.log(ticket_price('Weekend', 15));
console.log(ticket_price('Weekend', -1))
