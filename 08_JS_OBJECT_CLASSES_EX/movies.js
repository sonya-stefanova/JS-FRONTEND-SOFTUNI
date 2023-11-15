function movies(input){

    let movies = [];
     
    input.forEach((commandLine) => {
        if (commandLine.includes('addMovie')) {
            const [_, name]=commandLine.split('addMovie ');
            movies.push({
                name, 
            })
        } else if (commandLine.includes('directedBy')) {
            const [movieName, directorName] = commandLine.split(' directedBy ');
            const movie = movies.find((m) => m.name === movieName)
            if (movie){
                movie.director = directorName;
            };

        } else if (commandLine.includes('onDate')) {
            const [movieName, date] = commandLine.split(' onDate ');
            const movie = movies.find((m) => m.name === movieName)
            if (movie){
                movie.date = date;
            };

        }
    });
    
    movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )