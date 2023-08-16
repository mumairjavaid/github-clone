import requests from "@/Requests";
import { useEffect, useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState("");
  const getMovies = async () => {
    const res = await fetch(requests.requestPopular);
    const data = await res.json();
    setMovies(data.results);
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    getMovies();
  }, []);

  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full text-white h-[80vh] md:h-[70vh]">
        <div className="w-full h-full">
          <div className="w-full absolute h-[80vh] md:h-[70vh] bg-gradient-to-r from-black"></div>
          <img
            className="object-cover w-full h-[80vh] md:h-[70vh]"
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={`${movie?.title}`}
          />
          <div className="absolute top-[35%] left-[5%] md:left-[10%]">
            <div className="text-3xl mb-5 text-white md:text-5xl">
              {movie?.title}
            </div>
            <button className="bg-gray-400 p-4 border  hover:text-white border-black text-black mr-5">
              Play
            </button>
            <button className="border border-gray-400 p-4 text-gray-400 hover:bg-gray-400  hover:text-white">
              Watch Later
            </button>
            <div className="mt-4 text-sm">
              Released on: {movie?.release_date}
            </div>
            <div className="mt-5 w-full md:max-w-[70%] lg:max-w-[60%] xl:max-w-[75%] ">
              {truncate(movie?.overview, 200)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
