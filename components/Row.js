import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Row = ({ title, movieURL, id }) => {
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const response = await fetch(movieURL);
    const data = await response.json();
    setMovie(data?.results);
  };
  useEffect(() => {
    getMovies();
  }, [movieURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="font-bold text-lg mt-3 p-2">{title}</h2>
      <div className="flex group relative">
        <div className="absolute top-[40%] left-0 z-10 hidden group-hover:block rounded pointer">
          <FaChevronCircleLeft
            className="cursor-pointer"
            onClick={slideLeft}
            size={40}
            color="red"
            weight="fill"
          />
        </div>
        <div
          id={"slider" + id}
          className="w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide overflow-x-auto relative"
        >
          {movie.map((curr, id) => {
            return (
              <div
                key={id}
                className="w-[100px] relative md:w-[150px] lg:w-[200px] p-2 inline-block cursor-pointer "
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${curr?.poster_path}`}
                  alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="flex h-full items-center justify-center text-center">
                    {curr?.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute top-[40%] right-0 hidden group-hover:block z-10 rounded">
          <FaChevronCircleRight
            className="cursor-pointer"
            onClick={slideRight}
            size={40}
            color="red"
            weight="fill"
          />
        </div>
      </div>
    </>
  );
};

export default Row;
