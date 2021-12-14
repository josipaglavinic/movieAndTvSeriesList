import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import BasicPagination from "../Pagination/Pagination";
import Categories from "./categories/Categories";
import useGenre from "../hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setnumberOfPages] = useState();
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [category, setCategory] = useState([]);

  const genreforURL = useGenre(selectedCategory);

  const fetchMovies = async () => {
    const { data } = await axios.get(`
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    console.log(data.results);
    setMovies(data.results);
    setnumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div className="card-items">
      <span className="page-title">Movies</span>
      <Categories
        type="movie"
        selectedCategory={selectedCategory}
        category={category}
        setCategory={setCategory}
        setSelectedCategory={setSelectedCategory}
        setPage={setPage}
      />
      <div className="trending">
        {movies &&
          movies.map((movie) => (
            <Card item={movie} key={movie.id} media_type="movie" />
          ))}

        {numberOfPages > 1 ? (
          <BasicPagination
            page={page}
            setPage={setPage}
            numberOfPages={numberOfPages}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Movies;
