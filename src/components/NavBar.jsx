import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {

    
const navigation=useNavigate();

const handleClick=()=>{
    navigation('/login');
  }

  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-li">
            <Link to="/about">About</Link> 
          </li>
        </ul>
        <button className="btn" onClick={handleClick}>Login</button>
      </nav>
    </div>
  );
};

export default NavBar;
