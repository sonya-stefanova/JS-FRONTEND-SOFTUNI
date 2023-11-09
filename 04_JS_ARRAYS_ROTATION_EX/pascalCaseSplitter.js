function pascalCaseSplitter(text){
    pattern=/[A-Z][a-z]*/gm;
    //  the idea here is that there might exist ot not a small letter after the uppercase;
    matches=text.match(pattern)
    if (matches){
        let output=matches.join(", ");
        console.log(output);
    }

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');