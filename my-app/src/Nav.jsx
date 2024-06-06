import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <ul className="nav-link">
        <li className="nav-list"><Link to="/">Home</Link></li>
        <li className="nav-list"><Link to="/about">About</Link></li>
        <li className="nav-list"> <Link to="/contact">Contact</Link></li>
        <li className="nav-list"><Link to="/service">Service</Link></li>
      </ul>
    </>
  );
}

export default Nav;
