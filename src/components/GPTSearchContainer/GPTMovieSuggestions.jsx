import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieListContainer/MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, movieResults } = gpt;
  if (!gptMovies) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {gptMovies.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
