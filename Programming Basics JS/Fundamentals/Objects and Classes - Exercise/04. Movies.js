function movie(input) {
  let listOfMovies = [];

  for (let tokens of input) {
    if (tokens.includes("addMovie")) {
      let name = tokens.split("addMovie")[1].trim();
      listOfMovies.push({ name: name });
    } else if (tokens.includes("directedBy")) {
      let name = tokens.split(" directedBy ")[0];
      let director = tokens.split(" directedBy ")[1];
      let movie = listOfMovies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (tokens.includes("onDate")) {
      let name = tokens.split(" onDate ")[0];
      let date = tokens.split(" onDate ")[1];
      let dateOfMovie = listOfMovies.find((movieObj) => movieObj.name === name);
      if (dateOfMovie) {
        dateOfMovie.date = date;
      }
    }
  }
  for (let movie of listOfMovies) {
      if(movie.name && movie.director && movie.date){
   console.log(JSON.stringify(movie));
  }
}
}

movie([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

// movie([
//   "addMovie The Avengers",
//   "addMovie Superman",
//   "The Avengers directedBy Anthony Russo",
//   "The Avengers onDate 30.07.2010",
//   "Captain America onDate 30.07.2010",
//   "Captain America directedBy Joe Russo",
// ]);
