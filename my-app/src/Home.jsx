import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
function Home(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
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
    
      <div className="api-list">
        <table border="1">
          <tr>
            <td>Name</td>
            <td>EMAIL</td>
          </tr>
          {data &&
            data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}

export default Home;
