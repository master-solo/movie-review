import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/movie/movie";
import Main from "./components/Main/Main";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router basename="/movies-doctor">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
