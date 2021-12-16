import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./search.css";
import { Tab, Tabs } from "@material-ui/core";
import axios from "axios";
import Card from "../Card/Card";
import BasicPagination from "../Pagination/Pagination";

const Search = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [type, setType] = useState(0);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   setSearch("");
  // };
  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${search}&page=${page}&include_adult=false`
    );
    console.log(data.results);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page, search]);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch("");
  // };

  return (
    <div>
      <span className="page-title">Search for movie or TV series</span>
      <div className="search">
        <TextField
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          id="filled-basic"
          label="Filled"
          variant="filled"
          fullWidth
        />
      </div>
      <Tabs
        value={type}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
      >
        <Tab style={{ width: "50%" }} label="Search Movies" />
        <Tab style={{ width: "50%" }} label="Search Series" />
      </Tabs>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Card item={c} key={c.id} media_type={type ? "tv" : "movie"} />
          ))}

        {numOfPages > 1 ? (
          <BasicPagination
            page={page}
            setPage={setPage}
            numberOfPages={numOfPages}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
