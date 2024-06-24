function cookingByNumbers(num, ...commands){
    let numAsNum= Number(num);
    
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        
        switch(command) {
            case 'chop':
                numAsNum /= 2;
                break;
            case 'dice':
                numAsNum = Math.sqrt(numAsNum);
                break;
            case 'spice':
                numAsNum += 1;
                break;
            case 'bake':
                numAsNum *= 3;
                break;
            case 'fillet':
                numAsNum -= numAsNum * 0.2;
                break;
        }
        console.log(numAsNum);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
