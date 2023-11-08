function reverseArray(num, args) {
    let neededArray=args.slice(0, num).reverse().join(" ");
    console.log(neededArray);
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);