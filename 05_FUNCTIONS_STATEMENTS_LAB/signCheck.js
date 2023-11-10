function signCheck(a, b, s){

    if (a * b * s < 0){
        return "Negative"
    }
    else {
        return "Positive"
    }
}

console.log(signCheck(-1,-12,14));