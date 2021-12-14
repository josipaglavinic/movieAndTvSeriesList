import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Container } from "@mui/material";
import Trending from "./components/Pages/Trending";
import Movies from "./components/Pages/Movies";
import "./components/Pages/Search";
import Search from "./components/Pages/Search";
import Series from "./components/Pages/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </Container>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
