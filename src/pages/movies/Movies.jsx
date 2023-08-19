import "./Movie.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { movies } from "../../constants/api/api";
import MoviesList from "./Mv";

const Movies = () => {
  const topMovies = movies.slice(1, 16);

  return (
    <div
      id="movies"
      className=" movies m-auto bg-slate-900 mt-3 mb-5 "
    >
      <div className="container border-b-2 border-yellow-300 pb-5 m-auto ">
        <div className=" text-center py-4 lg:text-4xl text-2xl text-yellow-300 font-black border-b-2 border-yellow-300 ">
          <h1>Top Movies</h1>
        </div>
        <div className=" mt-5 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"1"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-botton-next",
              prevEl: ".swiper-botton-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
            breakpoints={{
              300: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
          >
            {topMovies.map((m) => {
              return (
                <SwiperSlide>
                  <div className=" relative ">
                    <img
                      src={m.image}
                      alt={m.id}
                      className=" lg:h-[380px] lg:w-[280px] sv h-[250px] rounded-lg "
                    />
                    <h1 className=" text-yellow-300 tracking-tighter text-[10px] absolute left-0 bottom-14 tbn py-1 px-2 lg:text-[13px] ">{m.title}</h1>
                    <span className=" tbn text-yellow-300 text-sm absolute left-1 top-1 py-1 px-2 "><i class="fa-solid fa-star mr-1"></i>{m.rating}</span>
                    <span className=" tbn text-yellow-300 tracking-tighter lg:text-xs text-[9px] absolute left-1 bottom-5 py-1 px-2 ">{m.type}</span>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className=" flex justify-around py-3 w-3/4 m-auto ">
              <div className="swiper-botton-prev slider-arrow w-[40px] h-[40px] bg-slate-800 rounded-full lg:grid place-items-center hidden ">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-botton-next slider-arrow w-[40px] h-[40px] bg-slate-800 rounded-full lg:grid place-items-center hidden ">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
      <MoviesList />
    </div>
  );
};

export default Movies;
