import { useState } from "react";
import { Logo } from "../../constants/api/api";
import "./NavBar.css";

const tabs = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Movies",
    path: "#movies",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false)

  window.onscroll = () => {scrollFunction()}

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <header>
      <div className=" relative z-10 ">
        <div className=" nav bg-slate-900 h-20 m-auto lg:rounded-md lg:shadow-sm shadow-white flex justify-between items-center px-3 ">
          <div className=" flex items-center h-full cursor-pointer flex-row ">
            <img src={Logo} alt="logo" className=" h-4/6 md:h-16 " />
            <h1 className=" uppercase font-bold text-yellow-400 text-sm lg:text-xl lg:font-extrabold ">
              Movies doctor
            </h1>
          </div>
          <div className=" hidden justify-between w-1/2 lg:flex ">
            <div className=" flex ">
              {tabs.map((tab) => {
                return (
                  <div className=" px-4 py-2 mx-1 cursor-pointer text-yellow-300 hover:border-b border-yellow-300 ">
                    <a href={tab.path} className=" uppercase ">
                      {tab.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <div>
              <button className=" bg-yellow-600 px-4 py-2 rounded-md hover:text-white ">
                Login
              </button>
            </div>
          </div>
          <div className=" lg:hidden " onClick={() => setActive(!active)}>
            <div>
              <div className={active ? "activeBar" : "bar"}></div>
            </div>
          </div>
        </div>
        <div className={active ? "activeSidebar" : "sidebar"}>
          <ul className=" list-none ">
            {tabs.map((tab) => {
              return (
                <li className=" py-2 px-4 " onClick={() => setActive(false)}>
                  <a href={tab.path} className=" uppercase text-yellow-300 ">
                    {tab.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <button className=" ml-2 bg-yellow-600 px-4 rounded-md hover:text-white ">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className={scroll? "up" : "upnone"} onClick={() => topFunction()} >
        <i class="fa-solid fa-angle-up fa-bounce text-xl "></i>
      </div>
    </header>
  );
};

export default NavBar;
