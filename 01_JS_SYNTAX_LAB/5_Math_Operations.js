function math_operations(a, b, operator){
    let output;

    switch (operator) {
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            result = a/b;
            break;
        case '%':
            result = a%b;
            break;
        case '**':
            result = a**b;
            break;
        }
        return console.log(result);
        
    }



math_operations(5, 6, '+')
math_operations(3, 5.5, '*')