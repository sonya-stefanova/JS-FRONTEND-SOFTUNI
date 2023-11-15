function excellent_grade(grade) {
    if (grade>=5.50 && grade<=6.00){
        console.log(`Excellent`);
    } else if (grade>=2 && grade<=6.00) {
        console.log(`Not excellent`);
    } else {
        console.log('Not a valid grade');
    }
}

excellent_grade(5.50);
excellent_grade(2);
excellent_grade(6.50);
excellent_grade(6.00);
excellent_grade(5.80);
