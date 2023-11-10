
function formatGrade(grade){
    let result = ''
    grade = grade.toFixed(2)

    if (grade < 3.00){
        result = `Fail (2)`
    } else if (grade < 3.50){
        result = `Poor (${grade})`
    } else if (grade < 4.50){
        result = `Good (${grade})`
    } else if (grade < 5.50){
        result = `Very good (${grade})`
    } else if (grade >= 5.50){
        result = `Excellent (${grade})`
    }
    console.log(result)
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);