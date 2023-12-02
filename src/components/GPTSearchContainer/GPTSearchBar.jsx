import React, { useRef } from "react";
import lang from "../../constants/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../constants/constants";
import { addGPTMovieResults } from "../../redux/slice/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie details from tmdb
  const fetchMovieDetails = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const movieDetails = await data.json();
    return movieDetails.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Give me only top 5 movies, comma separated and ranked highly on iMDB, like the example result given ahead. Example Result: Gadar, Sholay, Don, KGF2, Koi Mil Gaya";
    // make api call to openAI to get results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
    }

    const suggestedMovies =
      gptResults.choices?.[0]?.message?.content.split(",");

    // search each movie details from tmdb
    const promiseArray = suggestedMovies.map((movie) =>
      fetchMovieDetails(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResults({
        movieNames: suggestedMovies,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
