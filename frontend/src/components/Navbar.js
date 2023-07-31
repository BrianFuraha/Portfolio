import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

function Navbar() {
  // eslint-disable-next-line no-undef
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
            console.log("hello");
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Exerience</Link>
      </div>
    </div>
  );
}

export default Navbar;
