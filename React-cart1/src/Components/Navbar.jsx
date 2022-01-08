import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        fontSize: "30px",
        gap: "5rem"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/ContactUs">ContactUs</Link>
      <Link to="/FAQ">FAQ</Link>
    </div>
  );
};
export { Navbar };
