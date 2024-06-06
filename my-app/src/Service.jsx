import React from "react";
import Nav from "./Nav";

function Service(props) {
  return (
    <>
    <div className="main-bar">
        <div className="header-bar-one">
            <h1 style={{color:"white"}}>MSNBLR</h1>
        </div>
    <div className="header-bar">
        <Nav />
      </div>
    </div>
      <div>
        <ul>
            <li>Travel</li>
            <li>Retail</li>
            <li>Entertainment</li>
            <li>EComerse</li>
            <li>Softwere</li>
        </ul>
      </div>
    </>
  );
}

export default Service;
