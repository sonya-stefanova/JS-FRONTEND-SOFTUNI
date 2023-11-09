function modernTimesHashTag(sentence){
    const pattern=/#[A-z]+/gm;
    matches=sentence.match(pattern);
    for (match of matches){
        currentMatch=match.split("#");
        console.log(currentMatch[1]);
    }

}

modernTimesHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')