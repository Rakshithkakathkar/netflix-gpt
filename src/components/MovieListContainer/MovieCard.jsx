import React from "react";
import { IMG_URL } from "../../constants/constants";

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_URL + posterPath} alt="movie card" />
    </div>
  );
};
