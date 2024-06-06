import React from "react";
import Nav from "./Nav";

function About(props) {
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
        <h3>MSNBLR</h3>
        <p>
          We are Leading company since 24 years in market.Evereday we are
          working on new innovation.In future we are planning to move abroad
          country. In already we have started middle asia country is like a
          Dubai and Kuwait. we have more investors in all our world.
        </p>
      </div>
    </>
  );
}

export default About;
