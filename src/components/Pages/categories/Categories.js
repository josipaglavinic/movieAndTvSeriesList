import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";
import "./category.css";

const Categories = ({
  type,
  selectedCategory,
  category,
  setCategory,
  setSelectedCategory,
  setPage,
}) => {
  const handleAdd = (cat) => {
    setSelectedCategory([...selectedCategory, cat]);
    setCategory(category.filter((c) => c.id !== cat.id));
    setPage(1);
  };

  const handleRemove = (cat) => {
    setSelectedCategory(
      selectedCategory.filter((selected) => selected.id !== cat.id)
    );
    setCategory([...category, cat]);
    setPage(1);
  };

  const fetchCategory = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    console.log(data.genres);
    setCategory(data.genres);
  };

  useEffect(() => {
    fetchCategory();

    return () => {
      setCategory({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedCategory &&
        selectedCategory.map((cat) => {
          return (
            <Chip
              className="chips"
              key={cat.id}
              style={{ margin: 2 }}
              label={cat.name}
              clickable
              variant="outlined"
              onDelete={() => handleRemove(cat)}
            />
          );
        })}
      {category &&
        category.map((cat) => {
          return (
            <Chip
              key={cat.id}
              style={{ margin: 2 }}
              label={cat.name}
              clickable
              onClick={() => handleAdd(cat)}
            />
          );
        })}
    </div>
  );
};

export default Categories;
