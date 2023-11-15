function largest(num1, num2, num3) {
    let max_num;

    max_num=Math.max(num1, num2, num3)
    return console.log(`The largest number is ${max_num}.`)

}

largest(5, -3, 16)
largest(-3, -5, -22.5)
largest(0, -5, 1000)