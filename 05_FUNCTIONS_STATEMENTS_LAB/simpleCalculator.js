function simpleCalculator(num1, num2, operator) {
    // calculated with arrow functions
    const operationsMapping = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
    }
        const calculation = operationsMapping[operator];
    
        if (!operationsMapping) {
            return 0;
        }
    
        return calculation(num1, num2);
    }
        
    const result = simpleCalculator(5, 5,'multiply')
    console.log(result);