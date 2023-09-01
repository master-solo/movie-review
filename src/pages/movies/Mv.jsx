import { movies } from "../../constants/api/api";
import { Link } from "react-router-dom";

const MoviesList = () => {
  return (
    <div className=" w-full pt-5 ">
      <div className=" text-center lg:text-3xl text-xl font-bold text-yellow-300 pb-5 ">
        <h2>Movies Lists</h2>
      </div>
      <div className=" flex justify-center ">
        <div className=" flex justify-center flex-wrap w-fit ">
          {movies.map((m) => {
            return (
              <div className=" lg:w-1/6 w-1/3 p-4 ">
                <Link
                  to={`movie/${m.id}`}
                  className=" block relative rounded overflow-hidden "
                >
                  <img
                    src={m.image}
                    alt="img"
                    className=" block rounded-md w-full aspect-[9/16] "
                  />
                  <span className=" tbn text-yellow-300 text-sm absolute left-1 top-1 py-1 px-2 ">
                    <i class="fa-solid fa-star mr-1"></i>
                    {m.rating}
                  </span>
                  <h4 className=" text-base text-yellow-400 tbn absolute bottom-2 py-1 px-2 ">{m.title.substring(0,20)}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
