import { movies } from "../../constants/api/api";

const MoviesList = () => {
  return (
    <div className=" w-full pt-5 ">
      <div className=" flex justify-center ">
        <div className=" flex justify-center flex-wrap w-fit ">
          {movies.slice(0, 20).map((m) => {
            return (
              <div className=" lg:w-1/6 md:w-1/3 p-4 w-1/2 ">
                <a href="." className=" block relative rounded overflow-hidden " >
                  <img src={m.image} alt="img" className=" block w-full aspect-[9/16] " />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
