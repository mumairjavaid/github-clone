import React from "react";
import requests from "@/Requests";
import Row from "./Row";

const Movies = () => {
  return (
    <>
      <Row id="1" title="Horror" movieURL={requests.requestHorror} />
      <Row id="2" title="Trending" movieURL={requests.requestTrending} />
      <Row id="3" title="TopRated" movieURL={requests.requestTopRated} />
      <Row id="4" title="Popular" movieURL={requests.requestPopular} />
      <Row id="5" title="Upcoming" movieURL={requests.requestUpcoming} />
    </>
  );
};

export default Movies;
