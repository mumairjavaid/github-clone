import React from "react";
import requests from "@/Requests";
import Row from "./Row";

const Movies = () => {
  return (
    <>
      <Row title="Horror" movieURL={requests.requestHorror} />
    </>
  );
};

export default Movies;
