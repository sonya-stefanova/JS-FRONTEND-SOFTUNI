function addAndSubtract(num1,num2, num3) {

    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    return subtract(sum(num1, num2), num3)
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
