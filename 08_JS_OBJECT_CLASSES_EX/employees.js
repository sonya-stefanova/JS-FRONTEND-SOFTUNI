function solve(input){
    const employees = input.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});
    
    Object.entries(employees).forEach(([nname, num])=>{
        console.log(`Name: ${nname} -- Personal Number: ${num}`);
    }) 

}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villinputeal'
    ]);