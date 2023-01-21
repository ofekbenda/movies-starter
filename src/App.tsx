import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import "./GlobalStyle.css";
import "./App.css";

// Task: Add routing system
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
