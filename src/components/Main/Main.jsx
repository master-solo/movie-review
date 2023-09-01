import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home"
import Movies from "../../pages/movies/Movies"
import NavBar from "../navBar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Movies />
      <Contact />
      <About />
    </>
  )
}

export default Main;