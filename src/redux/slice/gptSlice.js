import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGPTMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
