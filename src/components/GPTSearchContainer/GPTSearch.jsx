import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUND_IMG } from "../../constants/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
