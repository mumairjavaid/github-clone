import React, { useEffect, useState } from "react";

const Row = ({ title, movieURL }) => {
  const [movie, setMovie] = useState([]);
  console.log(movie, "hiii");
  const getMovies = async () => {
    const response = await fetch(movieURL);
    const data = await response.json();
    setMovie(data?.results);
  };
  useEffect(() => {
    getMovies();
  }, [movieURL]);

  return (
    <>
      <h2 className="text-bold p-2">Horror</h2>
      <div className="flex items-center whitespace-nowrap scroll-smooth">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movie.map((curr, id) => {
            return (
              // ############# Apna Code #############
              // <div className="w-[100px] relative md:w-[500px] p-2 cursor-pointer ">
              //   <img
              //     className="w-full h-auto block"
              //     src={`https://image.tmdb.org/t/p/w500/${curr?.poster_path}`}
              //     alt={movie?.title}
              //   />
              //   <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
              //     <p className="flex currs-center justify-center h-full">
              //       {curr?.title}
              //     </p>
              //   </div>
              // </div>
              // End Apna Code

              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${curr?.backdrop_path}`}
                  alt={curr?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center currs-center h-full text-center">
                    {curr?.title}
                  </p>
                  {/* <p onClick={saveShow}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
