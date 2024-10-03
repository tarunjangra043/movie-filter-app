import React, { useState } from "react";
import MovieList from "./MovieList";
import GenreFilter from "./GenreFilter";
import { movies, genres } from "./data";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre === selectedGenre)
    : movies;

  return (
    <div>
      <h1>Movie List</h1>
      <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
