import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import BasicPagination from "../Pagination/Pagination";
import Categories from "./categories/Categories";
import axios from "axios";
import useGenre from "../hooks/useGenre";

const Series = () => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setnumberOfPages] = useState();
  const [series, setSeries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [category, setCategory] = useState([]);

  const genreforURL = useGenre(selectedCategory);

  //https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0

  const fetchSeries = async () => {
    const { data } = await axios.get(`
https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    console.log(data.results);
    setSeries(data.results);
    setnumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className="page-title">Series</span>
      <Categories
        type="tv"
        selectedCategory={selectedCategory}
        category={category}
        setCategory={setCategory}
        setSelectedCategory={setSelectedCategory}
        setPage={setPage}
      />

      <div className="trending">
        {series && series.map((s) => <Card item={s} key={s.id} />)}

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

export default Series;
