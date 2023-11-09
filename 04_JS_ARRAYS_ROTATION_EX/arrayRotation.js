function arrayRotations(array, rotations){
    
    for (let i=0; i<rotations; i++){
        firstEl=array.shift();
        array.push(firstEl);

    }
    console.log(array.join(" "));


}

arrayRotations([51, 47, 32, 61, 21], 2);
arrayRotations([32, 21, 61, 1], 4);