class createMovie {
    constructor() {
      this.movies = [];
    }
  
    addMovie(command) {
      const [_, name] = command.split("addMovie ");
      this.movies.push({ name });
    }
  
    addDirector(command) {
      const [movieName, directorName] = command.split(" directedBy ");
      const movie = this.movies.find((m) => m.name === movieName);
  
      if (movie) {
        movie.director = directorName;
      }
    }
  
    addDate(command) {
      const [movieName, date] = command.split(" onDate ");
      const movie = this.movies.find((m) => m.name === movieName);
  
      if (movie) {
        movie.date = date;
      }
    }
  }
  

  
  function solve(input) {
    const createMovie = new createMovie();
  
    input.forEach((command) => {
      if (command.includes("addMovie")) {
        createMovie.addMovie(command);
      } else if (command.includes("directedBy")) {
        createMovie.addDirector(command);
      } else if (command.includes("onDate")) {
        createMovie.addDate(command);
      }
    });
  
    createMovie.movies
      .filter((m) => m.name && m.director && m.date)
      .forEach((m) => console.log(JSON.stringify(m)));
  }
  
  solve([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
  ]);
  
  solve([
    "addMovie The Avengers",
    "addMovie Superman",
    "The Avengers directedBy Anthony Russo",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo",
  ]);