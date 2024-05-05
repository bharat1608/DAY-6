class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions");
 
  const movies = [
    new Movie("Frozen", "Disney", "PG"),
    new Movie("The Dark Knight", "Warner Bros", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("Harry Potter", "Warner Bros", "PG"),
    new Movie("Toy Story", "Pixar", "G"),
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  