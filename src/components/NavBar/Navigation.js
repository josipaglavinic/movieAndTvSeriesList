import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#393E46",
    color: "#EEEEEE",
  },

  icons: {
    color: "#EEEEEE",
  },
});

const Navigation = () => {
  const [value, setValue] = useState([0]);
  const navigate = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    }
    if (value === 1) {
      navigate("/movies");
    }
    if (value === 2) {
      navigate("/series");
    }
    if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box className={classes.root}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.icons}
          label="Trendings"
          icon={<LocalFireDepartmentIcon />}
        />
        <BottomNavigationAction
          className={classes.icons}
          label="Movie"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          className={classes.icons}
          label="Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          className={classes.icons}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
