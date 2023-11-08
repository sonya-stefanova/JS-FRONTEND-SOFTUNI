function sumFirstLastEl(nums) {
    let firstEl=nums.shift()
    let lastEl=nums.pop()
    let sum=firstEl+lastEl
    console.log(sum)
}

sumFirstLastEl([20, 30, 40])
sumFirstLastEl([10, 17, 22, 33])
sumFirstLastEl([11, 58, 69])