import React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const BasicPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePagination = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Pagination
          color="primary"
          count={numberOfPages}
          onChange={(e) => handlePagination(e.target.textContent)}
        />
      </>
    </ThemeProvider>
  );
};

export default BasicPagination;
