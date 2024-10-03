import React from "react";

const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    <div>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
