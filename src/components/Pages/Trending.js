import { useState, useEffect } from "react";
import Card from "../Card/Card";
import BasicPagination from "../Pagination/Pagination";
import axios from "axios";
import "./trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrendings = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
    console.log(content);
  };
  console.log(content);

  useEffect(() => {
    fetchTrendings();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="card-items">
      <span className="page-title">Trending</span>
      <div className="trending">
        {content && content.map((item) => <Card key={item.id} item={item} />)}

        <BasicPagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Trending;
