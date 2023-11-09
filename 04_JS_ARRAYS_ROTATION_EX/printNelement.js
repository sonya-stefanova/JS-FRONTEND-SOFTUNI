function arrayNelement(array, step) {
    let outputArray=[];
    
    for (let i=0; i<array.length; i+=step){
        let currentEl=array[i];
        outputArray.push(currentEl);
    }

    return outputArray;
}

arrayNelement(['dsa',
'asd', 
'test', 
'tset'], 
2
)