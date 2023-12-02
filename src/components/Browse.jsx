import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainMovieContainer/MainContainer";
import SecodaryContainer from "./MovieListContainer/SecodaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecodaryContainer />
    </div>
  );
};

export default Browse;
