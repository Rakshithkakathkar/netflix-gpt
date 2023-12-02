import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrailerVideo } from "../redux/slice/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispath = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const movieData = await data.json();
    const filterData = movieData.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer =
      filterData.length !== 0 ? filterData[0] : movieData.results[0];
    dispath(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
