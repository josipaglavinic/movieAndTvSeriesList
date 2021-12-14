import React from "react";
import "../Header/header.css";

const Header = () => {
  return (
    <div>
      <span className="header" onClick={() => window.scroll(0, 0)}>
        What to watch?
      </span>
    </div>
  );
};

export default Header;
