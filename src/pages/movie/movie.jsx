import { Link, useParams } from "react-router-dom";
import "./movie.css";
import { movies } from "../../constants/api/api";

const Movie = () => {
  const { id } = useParams();

  const movie = movies.filter((m) => {
    return m.id === id;
  });

  return (
    <div className=" mm m-auto bg-slate-900 ">
      <div>
        <div>
          <Link to="/">
            <div className=" text-yellow-400 flex items-center pt-10 pb-5 px-5 ">
              <i class="fa-solid fa-circle-arrow-left fa-shake mr-2 text-lg "></i>
              <span className=" text-sm ">Back to home</span>
            </div>
          </Link>
        </div>
        <div className=" flex pt-5 w-full ">
          <div className=" lg:w-1/3 w-1/2 ">
            <img
              src={movie[0].image}
              alt={movie[0].id}
              className=" lg:w-[300px] lg:h-[460px] w-[170px] h-[260px] lg:m-auto ml-3 rounded-lg "
            />
          </div>
          <div className=" text-yellow-400 lg:justify-end flex flex-col justify-between pl-1 ">
            <div>
              <h1 className=" lg:text-3xl text-base font-extrabold mb-2 ">
                {movie[0].title}
              </h1>
              <h4 className=" lg:text-lg text-xs mb-2 ">{movie[0].type}</h4>
              <span className=" lg:text-base text-xs flex items-center w-fit py-1 px-1 tbn lg:mb-20 ">
                <i class="fa-solid fa-star mr-1 "></i>
                {movie[0].rating}
              </span>
            </div>
            <div>
              <h4 className=" lg:text-base text-xs border-b border-cyan-400 pb-1 ">
                <i class="fa-solid fa-bullhorn -rotate-12 text-slate-300 mr-2 "></i>
                Director
              </h4>
              <span className=" lg:text-base text-xs ml-4 mb-3 ">
                {movie[0].cast.director}
              </span>
              <h4 className=" lg:text-base text-xs border-b border-cyan-400 pb-1 ">
                <i class="fa-solid fa-star -rotate-12 text-slate-300 mr-2 "></i>
                Star
              </h4>
              <span className=" lg:text-base text-xs ml-4 ">
                {movie[0].cast.actor}, {movie[0].cast.actress}
              </span>
            </div>
          </div>
        </div>
        <div className=" mt-8 pb-5 ">
          <h1 className=" text-yellow-500 ml-3 text-xl font-extrabold mb-3 py-1 px-1 border-b-2 border-cyan-400 w-fit ">
            Synopsis
          </h1>
          <h3 className=" px-5 text-yellow-500 text-base tracking-wider ">
            {movie[0].synopsis}
          </h3>
        </div>
        <div>
          <div className=" flex pb-5 ">
            <a href={movie[0].trailer}>
              <div className=" py-2 px-3 ml-3 bg-yellow-500 w-fit rounded-lg font-semibold ">
                <i class="fa-solid fa-clapperboard fa-shake mr-2"></i>
                Watch Trailer
              </div>
            </a>
            <a href={movie[0].url}>
              <div className=" py-2 px-3 ml-3 bg-yellow-500 w-fit rounded-lg font-semibold ">
                <i class="fa-solid fa-download fa-bounce mr-2 "></i>
                Download Link CM
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
