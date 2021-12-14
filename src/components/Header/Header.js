import React from "react";
import "../Header/header.css";

const Header = () => {
  return (
    <div>
      <span className="header" onClick={() => window.scroll(0, 0)}>
        Movies and TV SERIES
      </span>
    </div>
  );
};

export default Header;
