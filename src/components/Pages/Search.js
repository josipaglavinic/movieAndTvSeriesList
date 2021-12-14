import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   setSearch("");
  // };

  return (
    <div>
      <span className="page-title">Search for movie or TV series</span>
      <div className="search">
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          fullWidth
        />
      </div>
    </div>
  );
};

export default Search;
