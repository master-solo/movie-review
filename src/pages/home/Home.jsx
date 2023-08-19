import { Logo, intro } from "../../constants/api/api";
import "./Home.css";
import { Link as LinkScroll } from 'react-scroll'

const Home = () => {
  return (
    <div
      id="home"
      className=" h-[100vh] m-auto home bg-slate-900 lg:mt-4 mt-2 lg:flex "
    >
      <div className=" h-main h-full w-full ">
        <div className=" text-center p-3 ">
          <div className=" m-auto flex justify-center items-center flex-col mb-10 ">
            <img src={Logo} alt="logo" className=" w-32 lg:w-52 " />
            <h1 className=" text-yellow-300 uppercase text-2xl lg:text-5xl font-black tracking-widest lg:pl-8 leading-loose ">
              movies
              <br className=" hidden lg:block " /> doctor
            </h1>
          </div>
          <span className=" text-yellow-200 text-sm lg:text-base leading-relaxed tracking-widest ">
            {intro}
          </span>
        </div>
        <div className=" flex justify-center items-center mt-7 ">
          <LinkScroll to='movies' spy={true} smooth={true} offset={0} duration={500}>
            <button className=" bg-yellow-600 py-2 px-4 rounded-md flex justify-center items-center hover:text-white ">
              <span>See Reviews</span>
              <i class="fa-solid fa-arrow-right-long fa-beat ml-1"></i>
            </button>
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
